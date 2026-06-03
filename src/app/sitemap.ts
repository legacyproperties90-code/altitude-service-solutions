import type { MetadataRoute } from "next";

const baseUrl = "https://altitudess.net";
const langs = ["en", "es"];
const pages = [
  { path: "", priority: 1.0, freq: "weekly" as const },
  { path: "/residential", priority: 0.9, freq: "monthly" as const },
  { path: "/commercial", priority: 0.9, freq: "monthly" as const },
  { path: "/contact", priority: 0.95, freq: "monthly" as const },
  { path: "/gallery", priority: 0.7, freq: "monthly" as const },
  { path: "/about", priority: 0.8, freq: "monthly" as const },
  { path: "/privacy", priority: 0.3, freq: "yearly" as const },
  { path: "/terms", priority: 0.3, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.freq,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            langs.map((l) => [l, `${baseUrl}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
