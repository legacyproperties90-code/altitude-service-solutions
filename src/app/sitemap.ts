import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

const baseUrl = "https://altitudess.net";
const LAST_MODIFIED = new Date("2026-06-07");
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
        url: ,
        lastModified: LAST_MODIFIED,
        changeFrequency: page.freq,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(langs.map((l) => [l, ])),
        },
      });
    }
  }

  // Blog posts
  for (const post of posts) {
    entries.push({
      url: ,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: ,
          es: ,
        },
      },
    });
    entries.push({
      url: ,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: ,
          es: ,
        },
      },
    });
  }

  // City pages
  for (const city of cities) {
    for (const lang of langs) {
      entries.push({
        url: ,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(langs.map((l) => [l, ])),
        },
      });
    }
  }

  // Service pages
  for (const svc of services) {
    for (const lang of langs) {
      entries.push({
        url: ,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(langs.map((l) => [l, ])),
        },
      });
    }
  }

  return entries;
}
