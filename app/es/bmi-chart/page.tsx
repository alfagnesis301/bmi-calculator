import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-chart",
  title: "Tabla de IMC para adultos - Rangos por altura y peso",
  description:
    "Consulta una tabla de IMC para adultos con rangos métricos y estadounidenses, aprende a leerla y entiende sus limitaciones.",
});

const metricRows = [
  ["150 cm", "41.6-56.0 kg", "56.3-67.3 kg", "67.5 kg o más"],
  ["160 cm", "47.4-63.7 kg", "64.0-76.5 kg", "76.8 kg o más"],
  ["170 cm", "53.5-72.0 kg", "72.3-86.4 kg", "86.7 kg o más"],
  ["180 cm", "59.9-80.7 kg", "81.0-96.9 kg", "97.2 kg o más"],
  ["190 cm", "66.8-89.9 kg", "90.3-108.0 kg", "108.3 kg o más"],
  ["200 cm", "74.0-99.6 kg", "100.0-119.6 kg", "120.0 kg o más"]
];

const usRows = [
  ["5 ft 0 in", "95-127 lb", "128-153 lb", "154 lb o más"],
  ["5 ft 4 in", "108-145 lb", "146-174 lb", "175 lb o más"],
  ["5 ft 8 in", "122-164 lb", "165-197 lb", "198 lb o más"],
  ["5 ft 10 in", "129-173 lb", "174-208 lb", "209 lb o más"],
  ["6 ft 0 in", "137-183 lb", "184-220 lb", "221 lb o más"],
  ["6 ft 4 in", "152-204 lb", "205-245 lb", "246 lb o más"]
];

const faq = [
  ["¿Cómo se lee una tabla de IMC?", "Busca la fila más cercana a tu altura y compara tu peso con los rangos de esa fila. Usa la calculadora si necesitas un valor exacto."],
  ["¿Es tan precisa como una calculadora?", "No. La tabla usa alturas y pesos redondeados; la calculadora usa tus medidas exactas."],
  ["¿Por qué hay valores redondeados?", "Los límites de IMC suelen producir pesos con decimales. La tabla los redondea para facilitar la lectura."],
  ["¿Sirve para niños?", "No. Niños y adolescentes necesitan percentiles de IMC por edad y sexo."],
  ["¿La tabla diagnostica salud?", "No. Es una referencia de cribado; no mide grasa corporal ni diagnostica condiciones médicas."]
];

const references = [
  ["CDC: categorías de IMC en adultos", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS: calculadora de peso saludable", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"],
  ["OMS: obesidad y sobrepeso", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"]
];

export default function SpanishBMIChartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Referencia de IMC adulto</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Tabla de IMC para adultos</h1>
          <p className="mt-4 leading-8 text-slate-700">
            Una tabla de IMC permite comparar altura y peso con rangos adultos estándar. Es útil para
            una vista rápida, mientras que una calculadora ofrece un resultado más exacto cuando usas
            tus medidas reales.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Tabla métrica por altura</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Rangos métricos aproximados de IMC adulto por altura</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Altura</th>
                  <th className="py-3 pr-4 font-black">Peso saludable</th>
                  <th className="py-3 pr-4 font-black">Sobrepeso</th>
                  <th className="py-3 font-black">Obesidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {metricRows.map(([height, healthy, overweight, obesity]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3 pr-4">{healthy}</td>
                    <td className="py-3 pr-4">{overweight}</td>
                    <td className="py-3">{obesity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Tabla estadounidense por altura</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Rangos estadounidenses aproximados de IMC adulto por altura</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Altura</th>
                  <th className="py-3 pr-4 font-black">Peso saludable</th>
                  <th className="py-3 pr-4 font-black">Sobrepeso</th>
                  <th className="py-3 font-black">Obesidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {usRows.map(([height, healthy, overweight, obesity]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3 pr-4">{healthy}</td>
                    <td className="py-3 pr-4">{overweight}</td>
                    <td className="py-3">{obesity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Los rangos son aproximados y redondeados. Usa la calculadora para valores exactos.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Cómo leer la tabla</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Elige la tabla según las unidades que uses.</li>
              <li>Busca la fila más cercana a tu altura.</li>
              <li>Compara tu peso con los rangos de esa fila.</li>
              <li>Si estás cerca de un límite, calcula el IMC directamente.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Tabla frente a calculadora</h2>
            <p className="mt-4 leading-8 text-slate-700">
              La tabla es rápida de revisar, pero usa valores redondeados. La calculadora aplica la
              fórmula del IMC a tu altura y peso exactos, reduce errores de lectura y muestra un
              resultado decimal.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Errores comunes de interpretación</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Usar rangos adultos para niños o adolescentes.</li>
            <li>Asumir que un límite redondeado es más preciso que una calculadora.</li>
            <li>Ignorar cintura, composición corporal e historial médico.</li>
            <li>Tratar las categorías como diagnóstico.</li>
            <li>Usar el IMC durante el embarazo sin orientación profesional.</li>
          </ul>
          <Link href="/es" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Usar calculadora de IMC
          </Link>
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
