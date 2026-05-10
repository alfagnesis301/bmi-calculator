import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/health-calculators",
  title: "Calculadoras de salud gratuitas - IMC, TMB, calorías y grasa corporal",
  description:
    "Usa calculadoras gratuitas de IMC, TMB, calorías diarias, peso ideal y grasa corporal, con privacidad local y orientación responsable.",
});

const tools = [
  {
    name: "Calculadora de IMC",
    href: "/es",
    description:
      "Calcula tu Índice de Masa Corporal con unidades métricas o estadounidenses y consulta tu categoría adulta de IMC.",
    bestFor: "Categoría adulta de peso",
    useWithCare: "No mide grasa corporal directamente.",
    tags: ["Peso corporal", "Unidades métricas y estadounidenses", "Cribado adulto"],
    color: "border-teal-200 bg-teal-50 text-teal-700"
  },
  {
    name: "Calculadora de peso ideal",
    href: "/es/ideal-weight-calculator",
    description:
      "Estima pesos de referencia usando fórmulas conocidas como Devine, Robinson y Miller. Muestra cada fórmula y un promedio orientativo.",
    bestFor: "Referencias por fórmula",
    useWithCare: "No es un objetivo obligatorio.",
    tags: ["Peso ideal", "3 fórmulas", "Altura y género"],
    color: "border-sky-200 bg-sky-50 text-sky-700"
  },
  {
    name: "Calculadora de TMB",
    href: "/es/bmr-calculator",
    description:
      "Estima tu tasa metabólica basal y el gasto energético diario total mediante Mifflin-St Jeor y un factor de actividad.",
    bestFor: "Calorías en reposo y gasto diario",
    useWithCare: "Los factores de actividad son aproximados.",
    tags: ["Metabolismo basal", "TDEE", "Mifflin-St Jeor"],
    color: "border-violet-200 bg-violet-50 text-violet-700"
  },
  {
    name: "Calculadora de calorías",
    href: "/es/calorie-calculator",
    description:
      "Calcula una estimación de calorías diarias para mantenimiento, pérdida gradual o ganancia de peso según actividad y objetivo.",
    bestFor: "Mantenimiento, pérdida o ganancia",
    useWithCare: "Evita déficits extremos sin orientación profesional.",
    tags: ["Calorías diarias", "Objetivos de peso", "Nivel de actividad"],
    color: "border-amber-200 bg-amber-50 text-amber-700"
  },
  {
    name: "Calculadora de grasa corporal",
    href: "/es/body-fat-calculator",
    description:
      "Estima el porcentaje de grasa corporal mediante el método de circunferencias de la Marina de EE. UU.",
    bestFor: "Estimación de composición corporal por medidas",
    useWithCare: "La técnica de medición cambia el resultado.",
    tags: ["Grasa corporal", "Método de la Marina de EE. UU.", "Cinta métrica"],
    color: "border-rose-200 bg-rose-50 text-rose-700"
  }
];

const faq = [
  ["¿Estas calculadoras son herramientas médicas?", "No. Son estimaciones educativas y herramientas de cribado. No diagnostican condiciones de salud ni sustituyen consejo médico profesional."],
  ["¿Se guardan los datos que introduzco?", "No necesitas cuenta y los cálculos se procesan en tu navegador. BMI Checks no necesita enviar tus medidas a un servidor para calcular los resultados."],
  ["¿Qué calculadora debería usar primero?", "Empieza por IMC si quieres una categoría adulta rápida. Después usa TMB y calorías si quieres estimaciones de energía."],
  ["¿Puedo usar estas herramientas durante el embarazo?", "El embarazo cambia el peso y la composición corporal. Usa calculadoras adultas con cautela y pide orientación personalizada a un profesional sanitario."],
  ["¿Pueden usarlas niños?", "Las categorías adultas de IMC y varias fórmulas no están diseñadas para niños. La interpretación pediátrica suele requerir herramientas por edad y sexo."]
];

export default function SpanishHealthCalculatorsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Herramientas gratuitas, sin cuenta
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calculadoras de salud gratuitas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            BMI Checks ofrece calculadoras prácticas basadas en navegador para estimaciones comunes:
            IMC, TMB, calorías diarias, peso ideal y porcentaje de grasa corporal. Cada herramienta
            está pensada para educar y orientar, no para diagnosticar.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Cuándo usar cada calculadora</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Usa estas herramientas cuando quieras un punto de partida: una categoría de IMC, una
            estimación de metabolismo en reposo, un objetivo calórico, un peso de referencia o una
            estimación de grasa corporal por medidas. Para decisiones médicas, combina el resultado
            con síntomas, cintura, análisis clínicos, historial y orientación profesional.
          </p>
        </section>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-line transition hover:border-teal-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <h2 className="text-xl font-black text-ink transition group-hover:text-teal-700">
                {tool.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-700">{tool.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-bold ${tool.color}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-sm font-bold text-teal-700 underline-offset-4 group-hover:underline">
                Abrir calculadora
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Comparación de calculadoras</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Comparación de calculadoras de BMI Checks</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Herramienta</th>
                  <th className="py-3 pr-4 font-black">Mejor para</th>
                  <th className="py-3 pr-4 font-black">Entradas</th>
                  <th className="py-3 font-black">Uso responsable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {tools.map((tool) => (
                  <tr key={tool.name}>
                    <td className="py-3 pr-4 font-semibold">{tool.name}</td>
                    <td className="py-3 pr-4">{tool.bestFor}</td>
                    <td className="py-3 pr-4">{tool.tags.join(", ")}</td>
                    <td className="py-3">{tool.useWithCare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Qué calculadora deberías usar</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Empieza por la Calculadora de IMC si quieres una categoría adulta rápida. Usa la
              Calculadora de TMB para estimar energía en reposo y la Calculadora de calorías cuando
              necesites un objetivo diario según actividad y meta. Peso ideal y grasa corporal aportan
              contexto adicional, pero no son respuestas definitivas.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Privacidad y cálculos locales</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Las medidas se procesan en tu navegador. BMI Checks no requiere cuenta ni pide tu nombre.
              Si una herramienta permite guardar un resultado localmente, esos datos quedan en tu
              dispositivo salvo que decidas compartirlos.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Uso responsable</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Las calculadoras de BMI Checks usan fórmulas estándar publicadas en guías de salud pública
            o investigación revisada. Los resultados son estimaciones basadas en promedios poblacionales.
            Pueden ayudarte a formular mejores preguntas, pero no evalúan tu salud completa ni sustituyen
            el consejo de un profesional sanitario cualificado.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
            <Link href="/es/editorial-policy" className="underline-offset-4 hover:underline">Política editorial</Link>
            <Link href="/es/about" className="underline-offset-4 hover:underline">Acerca de BMI Checks</Link>
            <Link href="/es/contact" className="underline-offset-4 hover:underline">Contacto</Link>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Preguntas frecuentes</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Aviso médico</h2>
          <p className="mt-3 leading-8 text-slate-800">
            Todas las herramientas de este sitio son solo para información general y no sustituyen
            consejo médico profesional. Consulta a un profesional sanitario cualificado para dudas
            personales de salud.
          </p>
        </section>
      </div>
    </main>
  );
}
