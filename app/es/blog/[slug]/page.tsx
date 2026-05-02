import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticles } from "@/lib/blog";
import { getSpanishArticle } from "@/lib/blog-es";
import { createLocalizedMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getSpanishArticle(slug);
  if (!article) return {};

  return createLocalizedMetadata({
    locale: "es",
    path: `/blog/${slug}`,
    title: `${article.title} | BMI Checks`,
    description: article.description,
    type: "article",
  });
}

export default async function SpanishBlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getSpanishArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-10">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
          Guía educativa
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink">{article.title}</h1>
        <p className="mt-2 text-sm font-semibold text-muted">{article.reviewed}</p>
        <p className="mt-4 text-lg leading-8 text-slate-700">{article.description}</p>

        <div className="mt-8 space-y-8 leading-8 text-slate-700">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-ink">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3">{paragraph}</p>
              ))}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-black text-ink">Preguntas frecuentes</h2>
            <div className="mt-4 space-y-4">
              {article.faq.map((item) => (
                <details key={item.q} className="rounded-2xl border border-slate-200 p-5">
                  <summary className="cursor-pointer list-none font-bold text-ink">{item.q}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Herramientas y lecturas relacionadas</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {article.related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink hover:border-teal-300 hover:bg-teal-50">
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Referencias</h2>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-teal-800">
              {article.references.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-coral/30 bg-coral/10 p-5 text-slate-800">
            <h2 className="text-xl font-black text-ink">Aviso de salud</h2>
            <p className="mt-3">
              Este contenido es solo para información general y no sustituye el consejo médico
              profesional. Consulta a un profesional sanitario cualificado para dudas personales.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
