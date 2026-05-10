import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-formula",
  title: "Formula del IMC - Calculo metrico y estadounidense",
  description:
    "Aprende la formula del IMC en unidades metricas y estadounidenses, ejemplos de calculo y errores comunes.",
});

export default function SpanishBMIFormulaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Calculo del IMC</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Formula del IMC</h1>
          <p className="mt-4 leading-8 text-slate-700">
            El IMC compara peso y altura. Es una formula rapida para adultos, util como orientacion
            general, pero no mide grasa corporal directamente.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Formula metrica</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              IMC = peso (kg) / altura (m)^2
            </p>
            <p className="mt-4 leading-8 text-slate-700">Ejemplo: 70 kg y 1.75 m da 70 / 1.75^2 = 22.9.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Formula estadounidense</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              IMC = 703 * peso (lb) / altura (in)^2
            </p>
            <p className="mt-4 leading-8 text-slate-700">Ejemplo: 165 lb y 69 in da aproximadamente 24.4.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Errores comunes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Usar centimetros sin convertirlos a metros.</li>
            <li>No elevar la altura al cuadrado.</li>
            <li>Mezclar kilos con pulgadas o libras con metros.</li>
            <li>Redondear demasiado pronto.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Interpretacion</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Compara el resultado con rangos adultos: por debajo de 18.5 bajo peso, 18.5 a 24.9 peso
            saludable, 25 a 29.9 sobrepeso y 30 o mas obesidad. Son rangos de cribado, no diagnosticos.
          </p>
          <Link href="/es" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Calcular mi IMC
          </Link>
        </section>
      </article>
    </main>
  );
}
