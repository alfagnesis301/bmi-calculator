import Link from "next/link";
import { getArticles } from "@/lib/blog";
import { getSpanishArticle } from "@/lib/blog-es";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/blog",
  title: "Blog de salud e IMC - Artículos y guías",
  description:
    "Artículos informativos en español sobre IMC, peso saludable, nutrición, metabolismo y composición corporal.",
});

export default function SpanishBlogIndexPage() {
  const articles = getArticles();

  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Guías de salud con referencias
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Blog de salud e IMC
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Guías prácticas sobre IMC, peso saludable, nutrición y composición corporal, escritas para
            el público general y con avisos médicos claros.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-700">
            Los artículos son educativos y no sustituyen el consejo médico profesional. Úsalos para
            entender conceptos, preparar preguntas y enlazar con las calculadoras del sitio.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          {[
            ["IMC y categorías", "/es/bmi-categories"],
            ["Peso saludable", "/es/healthy-bmi-range"],
            ["Metabolismo y calorías", "/es/calorie-calculator"],
            ["Composición corporal", "/es/body-fat-calculator"]
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-ink shadow-line hover:border-teal-300 hover:bg-teal-50">
              {label}
            </Link>
          ))}
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => {
            const spanish = getSpanishArticle(article.slug);
            return (
              <Link
                key={article.slug}
                href={`/es/blog/${article.slug}`}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-line transition hover:border-teal-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                <h2 className="text-lg font-black leading-snug text-ink transition group-hover:text-teal-700">
                  {spanish?.title ?? article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
                  {spanish?.description ?? article.description}
                </p>
                <span className="mt-4 text-sm font-bold text-teal-700 underline-offset-4 group-hover:underline">
                  Leer artículo →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
