import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticles } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} – BMI Checks`,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const otherArticles = getArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  const publishedLabel = new Date(article.publishDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-teal-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-muted">
            <time dateTime={article.publishDate}>{publishedLabel}</time>
            <span>·</span>
            <span>{article.readingMinutes} min read</span>
            <span>·</span>
            <span>By <a href="/about" className="text-teal-700 underline-offset-4 hover:underline">Ricardo Diaz</a></span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <div className="space-y-8">
            {article.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
                )}
                {section.note && (
                  <div className="mt-4 rounded-2xl border border-teal-200 bg-teal-50 p-4">
                    <p className="text-sm font-semibold leading-7 text-teal-900">{section.note}</p>
                  </div>
                )}
                {section.paragraphs?.map((para, j) => (
                  <p key={j} className={`leading-8 text-slate-700 ${section.heading || section.note ? "mt-4" : j > 0 ? "mt-4" : ""}`}>
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
                    {section.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xl font-black text-teal-700">
              RD
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">Written by</p>
              <p className="mt-0.5 text-lg font-black text-ink">Ricardo Diaz</p>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                Ricardo is an independent health and fitness writer based in the United Kingdom.
                He covers evidence-based topics in body composition, nutrition, and metabolic health,
                drawing on peer-reviewed research and guidance from organisations including the WHO,
                NHS, and CDC. All content is reviewed for accuracy before publication and updated
                when public health guidance changes.
              </p>
              <a href="/about" className="mt-2 inline-block text-sm font-bold text-teal-700 underline-offset-4 hover:underline">
                More about this site →
              </a>
            </div>
          </div>
        </section>

        {article.references.length > 0 && (
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">References</h2>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-teal-800">
              {article.references.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="underline-offset-4 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Health disclaimer</h2>
          <p className="mt-3 leading-8 text-slate-800">
            This article is for general informational purposes only and does not replace professional
            medical advice. Always consult a qualified healthcare provider for personal health
            concerns.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">More articles</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherArticles.map((a) => (
              <a
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50"
              >
                {a.title}
              </a>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-4 inline-block text-sm font-bold text-teal-700 underline-offset-4 hover:underline"
          >
            View all articles →
          </Link>
        </nav>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Health calculators</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "BMI Calculator", href: "/" },
              { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
              { name: "BMR Calculator", href: "/bmr-calculator" },
              { name: "Calorie Calculator", href: "/calorie-calculator" },
            ].map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50"
              >
                {t.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
