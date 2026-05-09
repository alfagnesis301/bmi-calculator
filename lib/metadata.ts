import type { Metadata } from "next";
import { alternateUrls, localizedPath, toOgLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";

type LocalizedMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  openGraphDescription?: string;
  twitterDescription?: string;
  type?: "website" | "article";
  image?: string;
};

export function createLocalizedMetadata({
  locale,
  path,
  title,
  description,
  openGraphDescription,
  twitterDescription,
  type = "website",
  image = "/logo.png",
}: LocalizedMetadataInput): Metadata {
  const canonicalPath = localizedPath(path, locale);
  const url = `${siteConfig.url}${canonicalPath}`;
  const languages = alternateUrls(path, siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      title,
      description: openGraphDescription ?? description,
      url,
      siteName: siteConfig.name,
      type,
      locale: toOgLocale(locale),
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      images: [
        {
          url: image,
          alt: siteConfig.name,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription ?? description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
