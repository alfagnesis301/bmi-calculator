import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-categories",
  title: "Categorias de IMC en adultos - Rangos e interpretacion",
  description:
    "Consulta las categorias de IMC para adultos, sus rangos, limitaciones y como interpretar el resultado sin usarlo como diagnostico medico.",
});

const rows = [
  ["Por debajo de 18.5", "Bajo peso", "El peso puede estar por debajo del rango saludable estandar para la altura."],
  ["18.5 a 24.9", "Peso saludable", "El peso se encuentra dentro del rango saludable adulto usado habitualmente."],
  ["25 a 29.9", "Sobrepeso", "El peso esta por encima del rango saludable estandar para la altura."],
  ["30 o mas", "Obesidad", "El peso cae en el rango de obesidad segun categorias adultas de IMC."]
];

const faq = [
  ["El IMC diagnostica salud?", "No. El IMC es una herramienta de cribado. Puede orientar, pero no diagnostica salud ni composicion corporal."],
  ["Sirve para ninos y adolescentes?", "No. En menores se usan percentiles de IMC por edad y sexo, no rangos fijos de adultos."],
  ["Cuando puede confundir?", "Puede ser menos preciso en deportistas, embarazo, adultos mayores, algunos grupos etnicos o personas con condiciones medicas."]
];

export default function SpanishBMICategoriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Guia de IMC adulto</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Categorias de IMC en adultos</h1>
          <p className="mt-4 leading-8 text-slate-700">
            Las categorias de IMC agrupan resultados adultos en rangos amplios: bajo peso, peso
            saludable, sobrepeso y obesidad. Son utiles como orientacion general, pero no sustituyen
            una valoracion profesional.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Tabla de categorias adultas</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">Categorias estandar de IMC para adultos</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Rango de IMC</th>
                  <th className="py-3 pr-4 font-black">Categoria</th>
                  <th className="py-3 font-black">Interpretacion general</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rows.map(([range, category, meaning]) => (
                  <tr key={range}>
                    <td className="py-3 pr-4 font-semibold">{range}</td>
                    <td className="py-3 pr-4">{category}</td>
                    <td className="py-3">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Como usar estas categorias</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Usa la categoria como punto de partida. El IMC no distingue musculo, grasa, hueso o
            liquidos, y tampoco considera embarazo, edad, origen etnico, distribucion de grasa o
            historial medico individual.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Si tu resultado te preocupa o hubo cambios de peso inesperados, consulta a un
            profesional sanitario cualificado.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Preguntas frecuentes</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Guias relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-teal-700">
            <Link href="/es">Calculadora de IMC</Link>
            <Link href="/es/bmi-formula">Formula del IMC</Link>
            <Link href="/es/healthy-bmi-range">Rango saludable</Link>
            <Link href="/es/bmi-chart">Tabla de IMC</Link>
          </div>
        </nav>
      </article>
    </main>
  );
}
