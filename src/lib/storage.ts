import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function uploadDocument(
  file: File | Buffer,
  fileName: string,
  contentType: string,
  userId: string,
  docType: string
) {
  // Validate file size (max 2MB)
  const size = file instanceof Buffer ? file.length : (file as any).size;
  if (size > 2 * 1024 * 1024) {
    throw new Error("File size must not exceed 2MB.");
  }

  // Validate mime type
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];
  if (!allowedMimeTypes.includes(contentType)) {
    throw new Error("Invalid file type. Only JPG, PNG, WEBP, and PDF are allowed.");
  }

  const fileExtension = contentType.includes("pdf") ? "pdf" : contentType.split("/")[1] || "bin";
  const filePath = `${userId}/${docType}_${Date.now()}.${fileExtension}`;

  const uploadPayload = file instanceof Buffer ? file : file;

  const { data, error } = await supabase.storage
    .from("documents")
    .upload(filePath, uploadPayload, {
      contentType,
      upsert: true,
    });

  if (error) {
    throw new Error(`Supabase upload failed: ${error.message}`);
  }

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from("documents")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}
