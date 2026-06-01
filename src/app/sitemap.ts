import type { MetadataRoute } from "next";

const baseUrl = "https://altitudess.net";
const langs = ["en", "es"];
const pages = ["", "/residential", "/commercial", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "/contact" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            langs.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
