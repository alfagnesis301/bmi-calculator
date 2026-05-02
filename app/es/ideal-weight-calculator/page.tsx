import Link from "next/link";
import { IdealWeightCalculator } from "@/app/ideal-weight-calculator/IdealWeightCalculator";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/ideal-weight-calculator",
  title: "Calculadora de peso ideal - Devine, Robinson y Miller",
  description:
    "Estima un rango orientativo de peso ideal según altura y sexo con fórmulas Devine, Robinson y Miller. Incluye limitaciones, ejemplo y aviso médico.",
});

const faq = [
  ["¿Existe un peso ideal exacto?", "No. Las fórmulas de peso ideal producen referencias aproximadas. No contemplan masa muscular, estructura ósea, edad, origen étnico, embarazo ni historial médico."],
  ["¿Por qué Devine, Robinson y Miller dan resultados distintos?", "Cada fórmula se desarrolló con supuestos y poblaciones diferentes. Por eso conviene mirar el conjunto de resultados y no tratar una cifra como objetivo obligatorio."],
  ["¿Sirve para deportistas?", "Con cautela. Una persona con mucha masa muscular puede pesar más que la estimación y aun así tener una composición corporal saludable."],
  ["¿Es mejor que el IMC?", "No necesariamente. El IMC da un rango según altura y peso; estas fórmulas dan números de referencia por altura y sexo. Ambas son orientativas."]
];

const references = [
  { label: "Devine BJ (1974) - fórmula de peso ideal", href: "https://pubmed.ncbi.nlm.nih.gov/4346888/" },
  { label: "Robinson JD et al. (1983) - revisión de fórmulas", href: "https://pubmed.ncbi.nlm.nih.gov/6867490/" },
  { label: "CDC - peso saludable, nutrición y actividad física", href: "https://www.cdc.gov/healthy-weight/index.html" }
];

export default function SpanishIdealWeightCalculatorPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-sky-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Herramienta de salud gratuita
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calculadora de peso ideal
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estima un rango orientativo de peso ideal según tu altura y sexo usando fórmulas
            ampliamente conocidas como Devine, Robinson y Miller. Los resultados son solo una
            referencia general y no sustituyen una valoración médica.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <IdealWeightCalculator locale="es" />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Cómo usar esta calculadora</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
            <li>Elige unidades métricas o estadounidenses.</li>
            <li>Selecciona género masculino o femenino, porque las fórmulas usan bases distintas.</li>
            <li>Introduce tu altura con precisión.</li>
            <li>Pulsa <strong>Calcular peso ideal</strong>.</li>
            <li>Revisa Devine, Robinson, Miller y el promedio como referencias, no como diagnóstico.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Qué significa peso ideal</h2>
          <p className="mt-4 leading-8 text-slate-700">
            El peso ideal es una estimación del peso corporal asociado a una referencia general para
            una altura y sexo determinados. A diferencia del IMC, que genera una puntuación y un rango,
            estas fórmulas producen números concretos. Se originaron en contextos clínicos, sobre todo
            para dosificación de medicamentos, no como metas universales de salud.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Úsalas como una guía inicial. La composición corporal, el músculo, la densidad ósea, la edad,
            la distribución de grasa, el embarazo, las enfermedades y el historial personal pueden hacer
            que un peso saludable real esté por encima o por debajo de estas cifras.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Fórmulas usadas</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Devine</h3>
              <p className="mt-1 font-mono text-sm">Hombre: 50 kg + 2.3 * (altura en pulgadas - 60)</p>
              <p className="mt-1 font-mono text-sm">Mujer: 45.5 kg + 2.3 * (altura en pulgadas - 60)</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Robinson</h3>
              <p className="mt-1 font-mono text-sm">Hombre: 52 kg + 1.9 * (altura en pulgadas - 60)</p>
              <p className="mt-1 font-mono text-sm">Mujer: 49 kg + 1.7 * (altura en pulgadas - 60)</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Miller</h3>
              <p className="mt-1 font-mono text-sm">Hombre: 56.2 kg + 1.41 * (altura en pulgadas - 60)</p>
              <p className="mt-1 font-mono text-sm">Mujer: 53.1 kg + 1.36 * (altura en pulgadas - 60)</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Ejemplo</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Para un hombre de 5 ft 10 in, la altura son 70 pulgadas. Devine calcula 50 + 2.3 * 10 =
            73 kg. Robinson calcula 52 + 1.9 * 10 = 71 kg. Miller calcula 56.2 + 1.41 * 10 =
            aproximadamente 70 kg. El promedio ronda 71 kg, pero sigue siendo una referencia general.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>No mide grasa corporal ni masa muscular.</li>
            <li>No ajusta por edad, embarazo, medicación o enfermedades.</li>
            <li>No debe usarse como objetivo rígido de pérdida o ganancia de peso.</li>
            <li>Puede ser poco representativo en deportistas, adultos mayores o personas con complexiones muy distintas.</li>
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
            {references.map((r) => (
              <li key={r.href}><a href={r.href} rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">{r.label}</a></li>
            ))}
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
            <Link href="/es/calorie-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de calorías</Link>
            <Link href="/es/body-fat-calculator" className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink">Calculadora de grasa corporal</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
