import Link from "next/link";
import { BMRCalculator } from "@/app/bmr-calculator/BMRCalculator";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmr-calculator",
  title: "Calculadora de TMB - Tasa metabólica basal y TDEE",
  description:
    "Calcula tu tasa metabólica basal y gasto energético diario total estimado con la ecuación Mifflin-St Jeor.",
});

const faq = [
  ["¿Qué diferencia hay entre TMB y TDEE?", "La TMB estima calorías en reposo completo. El TDEE o gasto energético diario total multiplica la TMB por un factor de actividad para estimar calorías diarias."],
  ["¿La fórmula es exacta?", "No. Mifflin-St Jeor es una fórmula útil para adultos, pero el metabolismo real puede variar por masa muscular, hormonas, sueño, medicación y estado de salud."],
  ["¿Puedo usar la TMB para una dieta?", "Puede servir como referencia inicial, pero no conviene comer por debajo de la TMB durante periodos largos sin supervisión profesional."],
  ["¿Por qué importa el nivel de actividad?", "La actividad puede cambiar mucho el gasto diario. Elegir un nivel demasiado alto puede sobreestimar calorías."]
];

export default function SpanishBMRCalculatorPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-violet-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-violet-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700">
            Herramienta de salud gratuita
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calculadora de TMB
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Calcula tu tasa metabólica basal (TMB) y estima tu gasto energético diario total (TDEE)
            según edad, sexo, altura, peso y nivel de actividad.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <BMRCalculator locale="es" />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Qué es la TMB</h2>
          <p className="mt-4 leading-8 text-slate-700">
            La tasa metabólica basal estima cuántas calorías utiliza tu cuerpo en reposo para mantener
            funciones esenciales como respiración, circulación, temperatura corporal, reparación celular
            y funcionamiento del sistema nervioso. En muchas personas representa la mayor parte del gasto
            energético diario.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            El gasto energético diario total (TDEE) añade el efecto de la actividad física y el movimiento
            cotidiano. Por eso dos personas con la misma TMB pueden necesitar calorías distintas si sus
            semanas son muy diferentes.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Fórmula Mifflin-St Jeor</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Hombres</h3>
              <p className="mt-1 font-mono text-sm">TMB = 10 * peso(kg) + 6.25 * altura(cm) - 5 * edad + 5</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Mujeres</h3>
              <p className="mt-1 font-mono text-sm">TMB = 10 * peso(kg) + 6.25 * altura(cm) - 5 * edad - 161</p>
            </div>
          </div>
          <p className="mt-4 leading-8 text-slate-700">
            Ejemplo: hombre de 30 años, 175 cm y 70 kg. TMB = 700 + 1093.75 - 150 + 5 =
            aproximadamente 1,649 kcal/día.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>La fórmula es una estimación poblacional y puede desviarse del metabolismo real.</li>
            <li>No mide masa muscular, grasa corporal, hormonas ni condiciones médicas.</li>
            <li>Los multiplicadores de actividad son aproximados.</li>
            <li>Medicamentos, tiroides, sueño, estrés y cambios grandes de peso pueden alterar el gasto real.</li>
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
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/2305711/" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">Mifflin MD et al. (1990) - ecuación de gasto energético en reposo</a></li>
            <li><a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">NHS - entender calorías</a></li>
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Aviso de salud</h2>
          <p className="mt-3 leading-8 text-slate-800">
            Esta calculadora es solo para fines informativos generales y no sustituye el consejo médico
            profesional. Consulta siempre a un profesional sanitario cualificado si tienes dudas personales
            sobre tu salud.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Herramientas relacionadas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/es/calorie-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de calorías</Link>
            <Link href="/es" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de IMC</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
