import { notFound } from "next/navigation";
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
