import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.APP_URL || "http://localhost:3003";

  // Static routes
  const routes = ["", "/jobs", "/about", "/faqs", "/contact", "/terms", "/privacy"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic job details routes
  try {
    const jobPosts = await prisma.jobPost.findMany({
      where: { status: "open" },
      select: { slug: true, postedAt: true }
    });

    const jobRoutes = jobPosts.map((job) => ({
      url: `${baseUrl}/jobs/${job.slug}`,
      lastModified: job.postedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    return [...routes, ...jobRoutes];
  } catch (error) {
    const mockSlugs = [
      "field-officer-permanent",
      "field-officer-temporary",
      "sales-executive-permanent",
      "sales-executive-temporary",
      "telecaller-permanent",
      "telecaller-temporary"
    ];
    
    const mockRoutes = mockSlugs.map((slug) => ({
      url: `${baseUrl}/jobs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
    
    return [...routes, ...mockRoutes];
  }
}
