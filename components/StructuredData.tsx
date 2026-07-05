import { siteConfig } from "@/lib/seo";

export type FaqItem = { question: string; answer: string };

type StructuredDataProps = {
  /** Canonical path, e.g. "/healthy-bmi-range" */
  path: string;
  /** Article headline (usually the page title) */
  title: string;
  /** Article description (usually the meta description) */
  description: string;
  /** FAQ entries rendered on the page, normalized to { question, answer } */
  faq?: FaqItem[];
  /** Set true on interactive tool pages to also emit WebApplication schema */
  includeWebApp?: boolean;
  datePublished?: string;
  dateModified?: string;
  image?: string;
};

/**
 * Emits Article + FAQPage (and optionally WebApplication) JSON-LD for a
 * content/tool page. Mirrors the inline @graph used on the homepage so every
 * page shares one consistent structured-data shape.
 */
export function StructuredData({
  path,
  title,
  description,
  faq,
  includeWebApp = false,
  datePublished = "2026-05-01",
  dateModified = "2026-07-05",
  image = "/logo.png",
}: StructuredDataProps) {
  const url = `${siteConfig.url}${path}`;
  const graph: Record<string, unknown>[] = [];

  if (includeWebApp) {
    graph.push({
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name: title,
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url,
      description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: "BMI Checks", url: siteConfig.url },
    });
  }

  graph.push({
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    image: `${siteConfig.url}${image}`,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: "BMI Checks Editorial", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "BMI Checks",
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  });

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };
  const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml }} />;
}
