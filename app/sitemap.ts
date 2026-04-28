import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/blog";

const BASE = "https://bmichecks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/health-calculators`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/healthy-bmi-range`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ideal-weight-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/bmr-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/calorie-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/body-fat-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/editorial-policy`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/terms`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
