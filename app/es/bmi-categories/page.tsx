import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-categories",
  title: "Categorías de IMC en adultos - Rangos e interpretación",
  description:
    "Consulta las categorías de IMC para adultos, clases de obesidad, ejemplos, limitaciones y cómo interpretar el resultado sin usarlo como diagnóstico médico.",
});

const categoryRows = [
  ["Por debajo de 18.5", "Bajo peso", "El peso puede estar por debajo del rango adulto de referencia para la altura."],
  ["18.5 a 24.9", "Peso saludable", "El peso está dentro del rango adulto de IMC saludable usado habitualmente."],
  ["25 a 29.9", "Sobrepeso", "El peso está por encima del rango saludable estándar para la altura."],
  ["30 a 34.9", "Obesidad clase I", "El IMC cae en la primera clase de obesidad usada para cribado adulto."],
  ["35 a 39.9", "Obesidad clase II", "El IMC cae en la segunda clase de obesidad usada para cribado adulto."],
  ["40 o más", "Obesidad clase III", "El IMC cae en la clase de obesidad adulta más alta."]
];

const examples = [
  ["1.70 m y 60 kg", "20.8", "Peso saludable"],
  ["1.70 m y 78 kg", "27.0", "Sobrepeso"],
  ["1.70 m y 92 kg", "31.8", "Obesidad clase I"],
  ["175 cm y 70 kg", "22.9", "Peso saludable"],
  ["180 cm y 98 kg", "30.2", "Obesidad clase I"]
];

const faq = [
  ["¿Las categorías de IMC son un diagnóstico?", "No. Son rangos de cribado. Pueden orientar una conversación, pero no diagnostican salud, grasa corporal ni riesgo individual."],
  ["¿Por qué algunas fuentes dividen la obesidad en clases?", "La categoría amplia de obesidad empieza en IMC 30. Algunas referencias la subdividen en clases I, II y III para describir rangos más altos con mayor claridad."],
  ["¿Sirven para niños y adolescentes?", "No. En menores se usan percentiles de IMC por edad y sexo, no rangos fijos de adultos."],
  ["¿Un IMC saludable descarta riesgos?", "No. El IMC no muestra cintura, presión arterial, glucosa, colesterol, condición física ni antecedentes familiares."],
  ["¿Un IMC alto puede ser engañoso?", "Sí. Deportistas o personas con mucha masa muscular pueden tener un IMC alto sin el mismo porcentaje de grasa que otra persona con el mismo resultado."],
  ["¿Cuándo conviene consultar?", "Consulta a un profesional sanitario cualificado si el resultado te preocupa, si tu peso cambió sin explicación, si estás embarazada o si tienes una condición médica."]
];

const references = [
  ["OMS: obesidad y sobrepeso", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"],
  ["CDC: categorías de IMC en adultos", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS: calculadora de peso saludable", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"]
];

export default function SpanishBMICategoriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Guía de IMC adulto</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Categorías de IMC en adultos</h1>
          <p className="mt-4 leading-8 text-slate-700">
            Las categorías de IMC agrupan resultados adultos en rangos amplios. Ayudan a entender
            si un resultado cae en bajo peso, peso saludable, sobrepeso u obesidad, pero no sustituyen
            una valoración médica ni describen toda la salud de una persona.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Tabla completa de categorías adultas</h2>
          <p className="mt-4 leading-8 text-slate-700">
            La tabla utiliza puntos de corte habituales para adultos. Incluye clases de obesidad
            porque muchas referencias de salud pública subdividen el rango de IMC 30 o superior.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Categorías adultas de IMC y clases de obesidad</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Rango de IMC</th>
                  <th className="py-3 pr-4 font-black">Categoría</th>
                  <th className="py-3 font-black">Qué suele significar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categoryRows.map(([range, category, meaning]) => (
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

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Qué significa cada categoría</h2>
            <div className="mt-4 space-y-4 leading-8 text-slate-700">
              <p><strong>Bajo peso:</strong> el IMC está por debajo del rango adulto de referencia. Puede tener muchas causas y requiere contexto.</p>
              <p><strong>Peso saludable:</strong> el IMC está dentro del rango habitual. No garantiza salud metabólica ni mide condición física.</p>
              <p><strong>Sobrepeso:</strong> el IMC está por encima del rango saludable. La cintura, la actividad y la historia clínica aportan contexto.</p>
              <p><strong>Clases de obesidad:</strong> el IMC es 30 o superior. Las clases I, II y III describen rangos más altos, pero siguen necesitando interpretación clínica.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Ejemplos prácticos</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">Ejemplos de resultados de IMC y categorías</caption>
                <thead className="border-b border-slate-200 text-ink">
                  <tr>
                    <th className="py-3 pr-4 font-black">Ejemplo</th>
                    <th className="py-3 pr-4 font-black">IMC</th>
                    <th className="py-3 font-black">Categoría</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {examples.map(([example, bmi, category]) => (
                    <tr key={example}>
                      <td className="py-3 pr-4">{example}</td>
                      <td className="py-3 pr-4 font-semibold">{bmi}</td>
                      <td className="py-3">{category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Limitaciones de las categorías</h2>
          <p className="mt-4 leading-8 text-slate-700">
            El IMC puede ser menos preciso en deportistas o personas con mucha masa muscular,
            adultos mayores con menor masa muscular, embarazo, algunos grupos étnicos y condiciones
            médicas que afectan líquidos o peso. Las categorías adultas tampoco deben usarse para
            clasificar a niños o adolescentes.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Si el resultado te sorprende, combínalo con cintura, cambios recientes de peso,
            antecedentes y orientación profesional. Un profesional puede interpretar el IMC junto
            con información que una calculadora online no puede recoger.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Preguntas frecuentes sobre categorías de IMC</h2>
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

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Guías relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-teal-700">
            <Link href="/es">Calculadora de IMC</Link>
            <Link href="/es/bmi-formula">Fórmula del IMC</Link>
            <Link href="/es/healthy-bmi-range">Rango saludable</Link>
            <Link href="/es/bmi-chart">Tabla de IMC</Link>
          </div>
        </nav>
      </article>
    </main>
  );
}
