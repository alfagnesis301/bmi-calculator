import type { Metadata } from "next";
import { getArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Health & BMI Blog – Articles and Guides",
  description:
    "Informational articles on BMI, body weight, nutrition, and health. Evidence-based guides written for general audiences, citing WHO, NHS, and CDC sources.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const articles = getArticles();

  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Evidence-based health guides
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Health &amp; BMI Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Practical, evidence-based articles on BMI, healthy weight, nutrition, and body
            composition — written for general audiences and citing peer-reviewed sources.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-line transition hover:border-teal-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-black leading-snug text-ink group-hover:text-teal-700 transition">
                {article.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
                {article.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-muted">
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>{article.readingMinutes} min read</span>
              </div>
              <span className="mt-4 text-sm font-bold text-teal-700 group-hover:underline underline-offset-4">
                Read article →
              </span>
            </a>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">About these articles</h2>
          <p className="mt-4 leading-8 text-slate-700">
            All articles on BMI Checks are written to inform, not to replace professional medical
            advice. Content is based on publicly available research and guidance from organisations
            including the World Health Organization, NHS, CDC, and peer-reviewed journals. References
            are listed at the end of each article.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            BMI and related health metrics are population-level screening tools. Individual
            circumstances vary. Always consult a qualified healthcare provider for personal health
            decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
            <a href="/editorial-policy" className="underline-offset-4 hover:underline">
              Editorial Policy
            </a>
            <a href="/health-calculators" className="underline-offset-4 hover:underline">
              Health Calculators
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
