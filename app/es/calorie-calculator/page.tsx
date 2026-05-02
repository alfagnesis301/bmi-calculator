import Link from "next/link";
import { CalorieCalculator } from "@/app/calorie-calculator/CalorieCalculator";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/calorie-calculator",
  title: "Calculadora de calorías diarias - mantenimiento, pérdida o ganancia",
  description:
    "Calcula calorías diarias estimadas para mantenimiento, pérdida o ganancia de peso según TMB, actividad y objetivo.",
});

const faq = [
  ["¿Cuántas calorías necesito para perder peso?", "Una referencia común es crear un déficit moderado respecto al gasto diario total, por ejemplo 250 a 500 kcal. No es una regla médica universal."],
  ["¿Por qué mi resultado real puede ser diferente?", "Las fórmulas son estimaciones. Sueño, estrés, medicación, masa muscular, adaptación metabólica y precisión al registrar alimentos influyen."],
  ["¿Debo comer lo mismo cada día?", "No necesariamente. Algunas personas trabajan mejor con promedios semanales, especialmente si su actividad cambia mucho entre días."],
  ["¿Cuándo consultar?", "Si tienes una enfermedad, embarazo, antecedentes de trastornos alimentarios, medicación relevante o pérdida de peso involuntaria, busca orientación profesional."]
];

export default function SpanishCalorieCalculatorPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-amber-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-700">
            Herramienta de salud gratuita
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calculadora de calorías
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estima tus calorías diarias para mantenimiento, pérdida gradual o ganancia de peso a
            partir de edad, sexo, altura, peso y nivel de actividad.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <CalorieCalculator locale="es" />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Cómo se calculan las calorías</h2>
          <p className="mt-4 leading-8 text-slate-700">
            La calculadora estima primero la TMB con la ecuación Mifflin-St Jeor. Después multiplica
            esa cifra por un factor de actividad para obtener el gasto energético diario total (TDEE).
            A partir de ese valor calcula objetivos aproximados para mantenimiento, pérdida ligera,
            pérdida moderada, ganancia ligera y ganancia moderada.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Ejemplo: si una persona tiene un TDEE de 2,000 kcal/día, mantenimiento sería alrededor de
            2,000 kcal. Una pérdida moderada podría estimarse cerca de 1,500 kcal/día, pero no debe
            aplicarse de forma rígida ni sin considerar salud, hambre, entrenamiento y sostenibilidad.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Las necesidades reales pueden variar un 15-20% o más respecto a la fórmula.</li>
            <li>El nivel de actividad suele ser difícil de estimar con precisión.</li>
            <li>La pérdida de peso prolongada puede reducir el gasto energético por adaptación metabólica.</li>
            <li>Las calorías no sustituyen calidad alimentaria, descanso, salud mental ni contexto médico.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
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

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Referencias</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-teal-800">
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">Mifflin MD et al. (1990)</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">OMS - dieta saludable</a></li>
            <li><a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">NHS - entender calorías</a></li>
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Aviso de salud</h2>
          <p className="mt-3 leading-8 text-slate-800">
            Esta calculadora es solo para fines informativos generales y no sustituye el consejo médico
            profesional. Consulta siempre a un profesional sanitario cualificado antes de hacer cambios
            importantes en tu alimentación o calorías.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Herramientas relacionadas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/es/bmr-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de TMB</Link>
            <Link href="/es/ideal-weight-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de peso ideal</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
