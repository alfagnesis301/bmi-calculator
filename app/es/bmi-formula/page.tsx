import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-formula",
  title: "Fórmula del IMC - Cálculo métrico y estadounidense",
  description:
    "Aprende la fórmula del IMC en unidades métricas y estadounidenses con ejemplos paso a paso, errores comunes, limitaciones y referencias.",
});

const examples = [
  ["70 kg, 175 cm", "70 / 1.75^2", "22.9"],
  ["82 kg, 180 cm", "82 / 1.80^2", "25.3"],
  ["165 lb, 69 in", "703 x 165 / 69^2", "24.4"],
  ["210 lb, 70 in", "703 x 210 / 70^2", "30.1"]
];

const faq = [
  ["¿Por qué la altura se eleva al cuadrado?", "Porque el IMC ajusta el peso por altura para que el resultado sea más comparable entre adultos de diferentes estaturas."],
  ["¿Puedo usar centímetros directamente?", "No. En la fórmula métrica la altura debe estar en metros. Divide los centímetros entre 100 antes de calcular."],
  ["¿Por qué la fórmula estadounidense usa 703?", "El factor 703 convierte libras y pulgadas a la misma escala que kilogramos y metros."],
  ["¿Debo redondear antes de calcular?", "Conviene evitar redondeos tempranos. Calcula con las medidas más precisas posibles y redondea el resultado final a un decimal."],
  ["¿La fórmula cambia para hombres y mujeres?", "No. La fórmula es la misma, aunque la interpretación puede variar por composición corporal y otros factores individuales."],
  ["¿El IMC diagnostica salud?", "No. El IMC es un cálculo de cribado, no un diagnóstico ni una medición directa de grasa corporal."]
];

const references = [
  ["CDC: información sobre IMC en adultos", "https://www.cdc.gov/bmi/about/index.html"],
  ["NHS: calcular el IMC", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"],
  ["OMS: obesidad y sobrepeso", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"]
];

export default function SpanishBMIFormulaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Cálculo del IMC</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Fórmula del IMC</h1>
          <p className="mt-4 leading-8 text-slate-700">
            El IMC compara el peso con la altura. Se usa con frecuencia como cálculo de cribado en
            adultos porque es rápido y fácil de repetir, pero no mide grasa corporal directamente.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Fórmula métrica</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              IMC = peso (kg) / altura (m)^2
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Mide el peso en kilogramos.</li>
              <li>Convierte la altura de centímetros a metros dividiendo entre 100.</li>
              <li>Eleva la altura en metros al cuadrado.</li>
              <li>Divide el peso entre la altura al cuadrado.</li>
            </ol>
            <p className="mt-4 leading-8 text-slate-700">
              Ejemplo: 70 kg y 175 cm se convierte en 70 / 1.75^2 = 22.9.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Fórmula estadounidense</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              IMC = 703 x peso (lb) / altura (in)^2
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Mide el peso en libras.</li>
              <li>Convierte la altura a pulgadas totales.</li>
              <li>Eleva la altura en pulgadas al cuadrado.</li>
              <li>Multiplica el peso por 703 y divide por la altura al cuadrado.</li>
            </ol>
            <p className="mt-4 leading-8 text-slate-700">
              Ejemplo: 165 lb y 5 ft 9 in equivale a 69 in, así que IMC = 703 x 165 / 69^2 = 24.4.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Ejemplos de cálculo</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">Ejemplos de fórmula del IMC</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Medidas</th>
                  <th className="py-3 pr-4 font-black">Cálculo</th>
                  <th className="py-3 font-black">IMC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {examples.map(([measurements, calculation, bmi]) => (
                  <tr key={measurements}>
                    <td className="py-3 pr-4">{measurements}</td>
                    <td className="py-3 pr-4 font-mono text-xs">{calculation}</td>
                    <td className="py-3 font-semibold">{bmi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Errores comunes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
              <li>Usar centímetros directamente sin convertirlos a metros.</li>
              <li>Usar pies y pulgadas por separado en vez de pulgadas totales.</li>
              <li>No elevar la altura al cuadrado antes de dividir.</li>
              <li>Mezclar kilogramos con pulgadas o libras con metros.</li>
              <li>Redondear demasiado pronto y mover un resultado cercano al límite.</li>
              <li>Interpretar el número como una evaluación completa de salud.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Por qué se usa la altura al cuadrado</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Las personas más altas suelen pesar más que las personas más bajas. Elevar la altura al
              cuadrado es un ajuste estadístico simple para comparar mejor el peso entre adultos de
              distintas estaturas. No es perfecto, por eso el IMC puede clasificar mal a algunas personas.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Interpretación del resultado</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Después de calcular el IMC, compáralo con rangos adultos: por debajo de 18.5 es bajo peso,
            18.5 a 24.9 es peso saludable, 25 a 29.9 es sobrepeso y 30 o más cae en el rango de
            obesidad. Son rangos de cribado, no diagnósticos médicos.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/es" className="rounded-2xl bg-teal-700 px-5 py-3 font-black text-white">Calcular mi IMC</Link>
            <Link href="/es/bmi-categories" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Categorías de IMC</Link>
            <Link href="/es/bmi-chart" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Tabla de IMC</Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Preguntas frecuentes sobre la fórmula</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Referencias</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {references.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer" target="_blank">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Aviso médico</h2>
          <p className="mt-4 leading-8 text-slate-800">
            Esta página es solo para información general y no sustituye consejo médico profesional,
            diagnóstico ni tratamiento.
          </p>
        </section>
      </article>
    </main>
  );
}
