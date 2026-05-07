import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/blog";

const BASE = "https://bmichecks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", changeFrequency: "weekly", priority: 1, lastModified: new Date() },
    { path: "/health-calculators", changeFrequency: "monthly", priority: 0.9, lastModified: new Date() },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9, lastModified: new Date() },
    { path: "/bmi-guide", changeFrequency: "monthly", priority: 0.95, lastModified: new Date(), enOnly: true },
    { path: "/start-here", changeFrequency: "monthly", priority: 0.85, lastModified: new Date(), enOnly: true },
    { path: "/healthy-bmi-range", changeFrequency: "monthly", priority: 0.85, lastModified: new Date() },
    { path: "/how-to-find-your-bmi-score", changeFrequency: "monthly", priority: 0.85, lastModified: new Date() },
    { path: "/ideal-weight-calculator", changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { path: "/bmr-calculator", changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { path: "/calorie-calculator", changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { path: "/body-fat-calculator", changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { path: "/about", changeFrequency: "yearly", priority: 0.5, lastModified: new Date("2026-04-25") },
    { path: "/editorial-policy", changeFrequency: "yearly", priority: 0.5, lastModified: new Date("2026-04-25") },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4, lastModified: new Date("2026-04-25") },
    { path: "/terms", changeFrequency: "yearly", priority: 0.4, lastModified: new Date("2026-04-25") },
    { path: "/contact", changeFrequency: "yearly", priority: 0.3, lastModified: new Date("2026-04-25") },
  ] as const;

  const staticRoutes: MetadataRoute.Sitemap = paths.flatMap((route) => {
    const enUrl = `${BASE}${route.path || ""}`;
    const esUrl = `${BASE}/es${route.path || ""}`;
    const enOnly = "enOnly" in route && route.enOnly === true;
    const alternates = enOnly
      ? { languages: { en: enUrl, "x-default": enUrl } }
      : { languages: { en: enUrl, es: esUrl, "x-default": enUrl } };

    const entries = [
      { url: enUrl, lastModified: route.lastModified, changeFrequency: route.changeFrequency, priority: route.priority, alternates }
    ];
    if (!enOnly) {
      entries.push({
        url: esUrl,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: (Math.round(route.priority * 0.95 * 100) / 100) as 1 | 0.9 | 0.95 | 0.85 | 0.8 | 0.5 | 0.4 | 0.3,
        alternates
      });
    }
    return entries;
  });

  const articleRoutes: MetadataRoute.Sitemap = getArticles().flatMap((article) => {
    const enUrl = `${BASE}/blog/${article.slug}`;
    const esUrl = `${BASE}/es/blog/${article.slug}`;
    const alternates = {
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    };

    return [
      { url: enUrl, lastModified: new Date(article.publishDate), changeFrequency: "yearly", priority: 0.7, alternates },
      { url: esUrl, lastModified: new Date(article.publishDate), changeFrequency: "yearly", priority: 0.6, alternates },
    ];
  });

  return [...staticRoutes, ...articleRoutes];
}
