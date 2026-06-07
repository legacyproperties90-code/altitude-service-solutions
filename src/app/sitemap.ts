import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { cities } from "@/lib/cities";

const baseUrl = "https://altitudess.net";
const LAST_MODIFIED = new Date("2026-06-06");
const langs = ["en", "es"];

const staticPages = [
  { path: "", priority: 1.0, freq: "weekly" as const },
  { path: "/residential", priority: 0.9, freq: "monthly" as const },
  { path: "/commercial", priority: 0.9, freq: "monthly" as const },
  { path: "/contact", priority: 0.95, freq: "monthly" as const },
  { path: "/gallery", priority: 0.7, freq: "monthly" as const },
  { path: "/about", priority: 0.8, freq: "monthly" as const },
  { path: "/blog", priority: 0.8, freq: "weekly" as const },
  { path: "/privacy", priority: 0.3, freq: "yearly" as const },
  { path: "/terms", priority: 0.3, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const lang of langs) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: page.freq,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(langs.map((l) => [l, `${baseUrl}/${l}${page.path}`])),
        },
      });
    }
  }

  // Blog posts
  for (const post of posts) {
    entries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          es: `${baseUrl}/es/blog/${post.slugEs}`,
        },
      },
    });
    entries.push({
      url: `${baseUrl}/es/blog/${post.slugEs}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          es: `${baseUrl}/es/blog/${post.slugEs}`,
        },
      },
    });
  }

  // City pages
  for (const city of cities) {
    for (const lang of langs) {
      entries.push({
        url: `${baseUrl}/${lang}/locations/${city.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(langs.map((l) => [l, `${baseUrl}/${l}/locations/${city.slug}`])),
        },
      });
    }
  }

  return entries;
}
