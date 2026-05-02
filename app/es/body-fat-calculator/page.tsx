import Link from "next/link";
import { BodyFatCalculator } from "@/app/body-fat-calculator/BodyFatCalculator";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/body-fat-calculator",
  title: "Calculadora de grasa corporal - Método Marina de EE. UU.",
  description:
    "Estima tu porcentaje de grasa corporal con el método de circunferencias de la Marina de EE. UU. usando cintura, cuello, altura y cadera cuando aplica.",
});

const faq = [
  ["¿Qué tan preciso es el método de la Marina de EE. UU.?", "Es una estimación práctica. La precisión depende mucho de tomar cintura, cuello, altura y cadera en el punto correcto."],
  ["¿Es mejor que el IMC?", "Mide algo distinto. El IMC compara peso y altura; este método estima composición corporal, pero también tiene margen de error."],
  ["¿Dónde medir la cintura?", "Usa una cinta flexible, mantenla horizontal y mide tras una exhalación normal. No aprietes ni metas abdomen."],
  ["¿Cuándo consultar?", "Consulta si el resultado te preocupa, si tienes enfermedades, cambios bruscos de peso o necesitas una valoración más precisa."]
];

export default function SpanishBodyFatCalculatorPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-rose-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-rose-700">
            Herramienta de salud gratuita
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calculadora de grasa corporal
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estima tu porcentaje de grasa corporal con el método de circunferencias de la Marina de
            EE. UU. Solo necesitas una cinta métrica y medidas tomadas con cuidado.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <BodyFatCalculator locale="es" />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Método de grasa corporal de la Marina de EE. UU.</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Este método estima grasa corporal a partir de medidas corporales. En hombres usa altura,
            cintura y cuello. En mujeres añade cadera porque la distribución de grasa suele diferir por
            sexo. Es práctico y no requiere equipo especial, pero no tiene la precisión de pruebas
            clínicas como DEXA.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Cómo medir correctamente</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Mide la altura de pie y sin zapatos.</li>
            <li>Mide cintura con la cinta horizontal, sin apretar, después de una exhalación normal.</li>
            <li>Mide el cuello justo por debajo de la laringe, con la cabeza en posición neutra.</li>
            <li>En mujeres, mide cadera en la parte más ancha.</li>
            <li>Repite cada medida dos veces y usa un promedio si hay diferencias.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Fórmulas</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Hombres</h3>
              <p className="mt-1 font-mono text-sm leading-7">% grasa = 495 / (1.0324 - 0.19077 * log10(cintura - cuello) + 0.15456 * log10(altura)) - 450</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Mujeres</h3>
              <p className="mt-1 font-mono text-sm leading-7">% grasa = 495 / (1.29579 - 0.35004 * log10(cintura + cadera - cuello) + 0.22100 * log10(altura)) - 450</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Pequeños errores de medida pueden cambiar el resultado varios puntos.</li>
            <li>No distingue grasa visceral y subcutánea.</li>
            <li>Fue desarrollado en poblaciones concretas y puede variar en otros grupos.</li>
            <li>No debe usarse para decisiones médicas sin una valoración profesional.</li>
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
            <li><a href="https://apps.dtic.mil/sti/citations/ADA144692" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">Hodgdon y Beckett - fórmula US Navy</a></li>
            <li><a href="https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/" rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">ACE - categorías de grasa corporal</a></li>
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
            <Link href="/es" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de IMC</Link>
            <Link href="/es/bmr-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de TMB</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
