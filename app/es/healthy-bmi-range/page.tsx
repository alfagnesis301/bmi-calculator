import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/healthy-bmi-range",
  title: "Rango saludable de IMC para adultos - 18.5 a 24.9",
  description:
    "Aprende qué significa el rango saludable de IMC de 18.5 a 24.9 en adultos, cuándo puede ser menos preciso, ejemplos por altura y pasos responsables.",
});

const categories = [
  ["Bajo peso", "Por debajo de 18.5"],
  ["Rango saludable", "18.5 a 24.9"],
  ["Sobrepeso", "25 a 29.9"],
  ["Obesidad", "30 o más"]
];

const heightExamples = [
  ["160 cm", "47.4 a 63.7 kg"],
  ["170 cm", "53.5 a 72.0 kg"],
  ["180 cm", "59.9 a 80.7 kg"],
  ["190 cm", "66.8 a 89.9 kg"],
  ["5 ft 6 in", "115 a 154 lb"],
  ["5 ft 10 in", "129 a 173 lb"],
  ["6 ft 0 in", "137 a 183 lb"]
];

const faq = [
  ["¿Qué rango de IMC se considera saludable?", "Para la mayoría de adultos, 18.5 a 24.9 se describe habitualmente como rango de peso saludable."],
  ["¿El rango saludable sirve para todo el mundo?", "No. El IMC no considera composición corporal, embarazo, edad, etnia ni historial médico individual."],
  ["¿Una persona puede estar sana fuera del rango?", "Es posible. El IMC es solo una medida de cribado; un profesional puede revisar cintura, análisis, síntomas, actividad y antecedentes."],
  ["¿Un IMC normal garantiza salud?", "No. El IMC no muestra presión arterial, colesterol, glucosa, tabaquismo, condición física ni calidad de la dieta."],
  ["¿Qué hago si mi IMC está por debajo de 18.5?", "Evita autodiagnosticarte. Si el resultado es inesperado o hay síntomas, consulta a un profesional sanitario cualificado."],
  ["¿Qué hago si mi IMC está por encima de 24.9?", "Úsalo como punto de partida. Revisa cintura, hábitos e historial médico, y busca orientación profesional si te preocupa."]
];

const references = [
  ["OMS: obesidad y sobrepeso", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"],
  ["CDC: categorías de IMC en adultos", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS: calculadora de peso saludable", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"]
];

export default function SpanishHealthyBMIRangePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Guía de IMC adulto</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">
            Rango saludable de IMC para adultos: 18.5 a 24.9
          </h1>
          <p className="mt-4 leading-8 text-slate-700">
            Para la mayoría de adultos, un IMC entre 18.5 y 24.9 se describe como rango de peso
            saludable. Es una referencia útil de cribado, no una evaluación completa de salud.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Qué significa 18.5 a 24.9</h2>
            <p className="mt-4 leading-8 text-slate-700">
              El IMC compara peso y altura. Un resultado entre 18.5 y 24.9 cae dentro de la categoría
              adulta de peso saludable. A nivel poblacional, suele asociarse con menor riesgo relacionado
              con el peso que los rangos muy bajos o muy altos.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              En una persona concreta, el rango es una referencia. Dos adultos con el mismo IMC pueden
              tener distinta cintura, masa muscular, historial médico y marcadores metabólicos.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Categorías adultas de IMC</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">Tabla de categorías adultas de IMC</caption>
                <thead className="border-b border-slate-200 text-ink">
                  <tr>
                    <th className="py-3 pr-4 font-black">Categoría</th>
                    <th className="py-3 font-black">Rango de IMC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {categories.map(([label, range]) => (
                    <tr key={label}>
                      <td className="py-3 pr-4 font-semibold">{label}</td>
                      <td className="py-3">{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Ejemplos de peso saludable por altura</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Estos ejemplos muestran el rango aproximado de peso que corresponde a un IMC de 18.5 a
            24.9 para varias alturas. Los valores están redondeados; usa la calculadora para tu altura exacta.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <caption className="sr-only">Ejemplos de peso saludable por altura</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Altura</th>
                  <th className="py-3 font-black">Peso aproximado para IMC 18.5 a 24.9</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {heightExamples.map(([height, range]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Por qué no es universal</h2>
          <p className="mt-4 leading-8 text-slate-700">
            El IMC no contempla masa muscular, estructura ósea, distribución de grasa, embarazo,
            etnia, edad ni condiciones médicas individuales. Una persona entrenada puede superar 24.9
            sin tener la misma grasa corporal que otra persona con el mismo IMC; una persona mayor
            puede estar dentro del rango y aun así tener poca masa muscular.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Por eso conviene combinar el IMC con cintura, cambios recientes de peso, presión arterial,
            análisis clínicos, síntomas, antecedentes y orientación profesional cuando sea necesario.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Qué hacer si estás fuera del rango</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Si tu IMC está por debajo de 18.5 o por encima de 24.9, no lo uses para autodiagnosticarte.
            Revisa el contexto: cintura, actividad, apetito, sueño, medicación, síntomas y cambios
            recientes. Consulta si el cambio fue rápido, inesperado o si tienes dudas personales.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/es" className="rounded-2xl bg-teal-700 px-5 py-3 font-black text-white">Calcular mi IMC</Link>
            <Link href="/es/bmi-categories" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Categorías de IMC</Link>
            <Link href="/es/bmi-formula" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Fórmula del IMC</Link>
          </div>
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
            Esta página es solo para información general y no sustituye consejo médico profesional.
            Consulta a un profesional sanitario cualificado para dudas personales de salud.
          </p>
        </section>
      </article>
    </main>
  );
}
