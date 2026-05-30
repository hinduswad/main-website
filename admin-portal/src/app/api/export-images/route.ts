import { getAdminSession } from "@/lib/auth-jwt";
import { prisma } from "@/lib/prisma";
import JSZip from "jszip";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // 1. Guard: Check if the admin is logged in
    const session = await getAdminSession();
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 2. Query all profiles that have either a photo or an Aadhaar card url
    const profiles = await prisma.profile.findMany({
      where: {
        OR: [
          { photoUrl: { not: null } },
          { aadhaarUrl: { not: null } },
        ],
      },
      select: {
        fullName: true,
        photoUrl: true,
        aadhaarUrl: true,
        user: {
          select: {
            phone: true,
          },
        },
      },
    });

    if (profiles.length === 0) {
      // Return a zip with a readme if no files exist
      const zip = new JSZip();
      zip.file("readme.txt", "No candidate documents have been uploaded yet.");
      const zipBuffer = await zip.generateAsync({ type: "blob" });
      
      return new Response(zipBuffer, {
        headers: {
          "Content-Type": "application/zip",
          "Content-Disposition": "attachment; filename=empty_documents.zip",
        },
      });
    }

    const zip = new JSZip();
    const photoFolder = zip.folder("photos");
    const aadhaarFolder = zip.folder("aadhaar_cards");

    // Helper to fetch file and return ArrayBuffer or null on error
    const fetchFile = async (url: string): Promise<ArrayBuffer | null> => {
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
        if (!response.ok) return null;
        return await response.arrayBuffer();
      } catch (err) {
        console.error(`Failed to fetch document from ${url}:`, err);
        return null;
      }
    };

    // Helper to sanitize name for safe file names
    const sanitizeFilename = (name: string, phone: string) => {
      const clean = name.replace(/[^a-zA-Z0-9]/g, "_");
      return `${clean}_${phone}`;
    };

    // Fetch files in parallel with limit to prevent overloading
    const downloadPromises = profiles.map(async (profile) => {
      const sanitizedName = sanitizeFilename(profile.fullName, profile.user.phone);

      if (profile.photoUrl) {
        const buffer = await fetchFile(profile.photoUrl);
        if (buffer && photoFolder) {
          // Detect extension from url or default to .jpg
          const ext = profile.photoUrl.split(".").pop()?.split("?")[0] || "jpg";
          photoFolder.file(`${sanitizedName}_photo.${ext}`, buffer);
        }
      }

      if (profile.aadhaarUrl) {
        const buffer = await fetchFile(profile.aadhaarUrl);
        if (buffer && aadhaarFolder) {
          const ext = profile.aadhaarUrl.split(".").pop()?.split("?")[0] || "jpg";
          aadhaarFolder.file(`${sanitizedName}_aadhaar.${ext}`, buffer);
        }
      }
    });

    await Promise.all(downloadPromises);

    // 3. Compress ZIP file
    const zipBuffer = await zip.generateAsync({ type: "blob" });

    // 4. Return the ZIP download response
    return new Response(zipBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=candidate_documents_2026.zip",
      },
    });
  } catch (error) {
    console.error("ZIP Export route error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate ZIP archive" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
