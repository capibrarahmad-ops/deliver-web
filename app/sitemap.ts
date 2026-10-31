import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hnfuelsupply.vercel.app";
  // Static last modified date enables full static prerendering for optimal performance
  const lastModified = new Date("2026-10-31T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
