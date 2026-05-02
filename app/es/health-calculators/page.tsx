import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/health-calculators",
  title: "Calculadoras de salud gratuitas | BMI Checks",
  description:
    "Calculadoras online gratuitas: IMC, peso ideal, TMB, calorías diarias y grasa corporal. Funcionan en tu navegador y no requieren cuenta.",
});

const tools = [
  {
    name: "Calculadora de IMC",
    href: "/es",
    description:
      "Calcula tu Índice de Masa Corporal con unidades métricas o estadounidenses y consulta tu categoría de IMC para adultos.",
    tags: ["Peso corporal", "Métrico y estadounidense", "Orientación adulta"],
    color: "border-teal-200 bg-teal-50 text-teal-700"
  },
  {
    name: "Calculadora de peso ideal",
    href: "/es/ideal-weight-calculator",
    description:
      "Estima un rango de peso orientativo usando fórmulas conocidas como Devine, Robinson y Miller.",
    tags: ["Peso ideal", "3 fórmulas", "Altura y género"],
    color: "border-sky-200 bg-sky-50 text-sky-700"
  },
  {
    name: "Calculadora de TMB",
    href: "/es/bmr-calculator",
    description:
      "Estima tu tasa metabólica basal y tus necesidades energéticas diarias según nivel de actividad.",
    tags: ["Metabolismo basal", "Gasto energético diario total (TDEE)", "Mifflin-St Jeor"],
    color: "border-violet-200 bg-violet-50 text-violet-700"
  },
  {
    name: "Calculadora de calorías",
    href: "/es/calorie-calculator",
    description:
      "Calcula una estimación de calorías diarias para mantenimiento, pérdida gradual o ganancia de peso.",
    tags: ["Calorías diarias", "Pérdida de peso", "Objetivos"],
    color: "border-amber-200 bg-amber-50 text-amber-700"
  },
  {
    name: "Calculadora de grasa corporal",
    href: "/es/body-fat-calculator",
    description:
      "Estima el porcentaje de grasa corporal mediante el método de circunferencias de la Marina de EE. UU.",
    tags: ["Grasa corporal", "Método de la Marina de EE. UU.", "Cinta métrica"],
    color: "border-rose-200 bg-rose-50 text-rose-700"
  }
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
            Una colección de herramientas de salud basadas en navegador. Los cálculos se realizan en
            tu dispositivo, sin enviar tus medidas a un servidor y sin necesidad de crear cuenta.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
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
                Abrir calculadora →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Sobre estas herramientas</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Las calculadoras de BMI Checks utilizan fórmulas estándar publicadas y recursos de salud
            pública. Los resultados son estimaciones generales y no sustituyen una valoración clínica.
            Para decisiones personales sobre salud, consulta a un profesional sanitario cualificado.
          </p>
        </section>
      </div>
    </main>
  );
}
