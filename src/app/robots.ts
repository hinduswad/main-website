import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || "http://localhost:3003";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/apply", "/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
