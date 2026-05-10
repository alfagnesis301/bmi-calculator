import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-guide",
  title: "Guía completa del IMC para adultos - Cálculo, rangos y límites",
  description:
    "Guía completa del IMC para adultos: fórmula métrica y estadounidense, ejemplos, categorías, rango saludable, limitaciones y uso responsable.",
});

const categoryRows = [
  ["Por debajo de 18.5", "Bajo peso"],
  ["18.5 a 24.9", "Peso saludable"],
  ["25 a 29.9", "Sobrepeso"],
  ["30 o más", "Obesidad"]
];

const faq = [
  ["¿Qué es el IMC?", "El Índice de Masa Corporal compara el peso con la altura y ofrece una categoría orientativa en adultos."],
  ["¿Cómo se calcula?", "En unidades métricas se divide el peso en kilogramos entre la altura en metros al cuadrado. En unidades estadounidenses se usa el factor 703."],
  ["¿Qué rango se considera saludable?", "Para la mayoría de adultos, 18.5 a 24.9 se considera habitualmente rango de peso saludable."],
  ["¿El IMC mide grasa corporal?", "No. El IMC usa peso total y altura; no separa grasa, músculo, hueso ni líquidos."],
  ["¿Sirve para menores?", "No de la misma forma. Niños y adolescentes necesitan percentiles por edad y sexo."],
  ["¿Debo usar solo el IMC?", "No. Conviene considerarlo junto con cintura, historial, hábitos, síntomas y orientación profesional si hace falta."]
];

const references = [
  ["CDC: información sobre IMC", "https://www.cdc.gov/bmi/about/index.html"],
  ["NHS: calculadora de IMC para adultos", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"],
  ["OMS: obesidad y sobrepeso", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"]
];

export default function SpanishBMIGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Guía principal</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Guía completa del IMC para adultos</h1>
          <p className="mt-4 leading-8 text-slate-700">
            El IMC es una forma rápida de comparar peso y altura en adultos. Esta guía explica cómo se
            calcula, cómo se interpretan los rangos habituales, cuándo puede ser útil y cuáles son sus
            límites. El IMC es una herramienta de cribado, no un diagnóstico médico.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Qué calcula el IMC</h2>
            <p className="mt-4 leading-8 text-slate-700">
              El Índice de Masa Corporal estima la relación entre el peso y la altura. No intenta medir
              grasa corporal directamente, pero permite ubicar el resultado en categorías adultas
              estándar que se usan en salud pública y educación sanitaria.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Su ventaja es la simplicidad: solo necesitas altura y peso. Su límite es igual de claro:
              no puede ver masa muscular, cintura, embarazo, edad, etnia, análisis clínicos ni condiciones médicas.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Fórmulas de IMC</h2>
            <p className="mt-4 rounded-2xl bg-mist p-4 font-mono text-sm text-slate-800">
              IMC = peso (kg) / altura (m)^2
            </p>
            <p className="mt-4 rounded-2xl bg-mist p-4 font-mono text-sm text-slate-800">
              IMC = 703 x peso (lb) / altura (in)^2
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Ejemplo: 70 kg y 1.75 m da 70 / 1.75^2 = 22.9, dentro del rango de peso saludable.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Categorías adultas</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="sr-only">Categorías adultas de IMC</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Rango de IMC</th>
                  <th className="py-3 font-black">Categoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categoryRows.map(([range, category]) => (
                  <tr key={range}>
                    <td className="py-3 pr-4 font-semibold">{range}</td>
                    <td className="py-3">{category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Cómo usar tu resultado</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Usa el resultado como una señal inicial. Si está dentro de 18.5 a 24.9, suele considerarse
            dentro del rango saludable para adultos. Si está por debajo o por encima, no significa por
            sí solo que exista una enfermedad. Revisa el contexto y consulta si hay cambios de peso
            inesperados, síntomas o dudas personales.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Para interpretar mejor el IMC puedes añadir cintura, presión arterial, glucosa, colesterol,
            actividad física, alimentación, sueño, medicación e historial médico. Un profesional sanitario
            puede integrar esos datos de forma individual.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/es" className="rounded-2xl bg-teal-700 px-5 py-3 font-black text-white">Calcular mi IMC</Link>
            <Link href="/es/bmi-categories" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Ver categorías</Link>
            <Link href="/es/bmi-formula" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">Aprender la fórmula</Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Ejemplo paso a paso</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Imagina una persona adulta que mide 1.68 m y pesa 72 kg. Primero se eleva la altura al
              cuadrado: 1.68 x 1.68 = 2.82. Después se divide el peso entre ese valor: 72 / 2.82 = 25.5.
              Ese resultado cae en el rango de sobrepeso para adultos.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              La interpretación responsable no termina ahí. Conviene revisar si la persona tiene mucha
              masa muscular, si hubo cambios de peso recientes, cómo es su cintura, si existen síntomas
              o si tiene condiciones médicas que puedan cambiar la lectura.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">IMC frente a otras medidas</h2>
            <p className="mt-4 leading-8 text-slate-700">
              La cintura puede aportar información sobre distribución de grasa. El porcentaje de grasa
              corporal intenta estimar composición corporal. La TMB y las calorías estiman gasto energético.
              Ninguna medida por sí sola resume la salud completa, pero juntas pueden ofrecer una imagen
              más útil que el IMC aislado.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Si buscas un plan personalizado, lo adecuado es hablar con un profesional sanitario o un
              dietista cualificado. Las calculadoras online son puntos de partida, no instrucciones médicas.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              También es útil repetir las mediciones con el mismo método y observar tendencias, no solo
              un resultado aislado. El peso puede cambiar por hidratación, comida reciente, ciclo menstrual,
              entrenamiento o descanso, así que una sola lectura no siempre cuenta toda la historia.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Cuándo el IMC puede ser menos preciso</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Deportistas o personas con mucha masa muscular.</li>
            <li>Adultos mayores con pérdida de masa muscular.</li>
            <li>Embarazo o cambios corporales recientes.</li>
            <li>Niños y adolescentes, que requieren percentiles por edad y sexo.</li>
            <li>Algunos grupos étnicos y personas con condiciones médicas específicas.</li>
            <li>Situaciones donde hay retención de líquidos o cambios rápidos de peso.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Errores comunes al interpretar el IMC</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Usarlo como diagnóstico en vez de como señal de cribado.</li>
            <li>Comparar adultos con niños o adolescentes usando los mismos rangos.</li>
            <li>Ignorar si el peso corresponde sobre todo a músculo, líquido o grasa.</li>
            <li>Tomar decisiones drásticas de dieta solo por una cifra.</li>
            <li>Olvidar que un IMC dentro del rango saludable no garantiza presión arterial, glucosa o colesterol normales.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Herramientas relacionadas</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Después de calcular el IMC, puedes revisar el rango saludable, consultar una tabla por altura
            o estimar calorías diarias. Estas herramientas no sustituyen una evaluación profesional, pero
            ayudan a ordenar la información antes de una conversación con un especialista.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/es/healthy-bmi-range" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Rango saludable de IMC</Link>
            <Link href="/es/bmi-chart" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Tabla de IMC</Link>
            <Link href="/es/calorie-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de calorías</Link>
            <Link href="/es/body-fat-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de grasa corporal</Link>
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
            Esta guía es solo para información general y no sustituye consejo médico profesional,
            diagnóstico ni tratamiento.
          </p>
        </section>
      </article>
    </main>
  );
}
