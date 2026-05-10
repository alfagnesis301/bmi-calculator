import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/bmi-formula",
  title: "BMI Formula - Calculate Body Mass Index in Metric and US Units",
  description:
    "Learn the BMI formula for metric and US units, see worked examples, and understand common calculation mistakes and limitations.",
});

export default function BMIFormulaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">BMI calculation</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">BMI Formula</h1>
          <p className="mt-4 leading-8 text-slate-700">
            BMI, or Body Mass Index, compares weight with height. It is quick to calculate and is
            commonly used as an adult screening tool, but it does not measure body fat directly.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Metric BMI formula</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              BMI = weight (kg) / height (m)^2
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Example: 70 kg and 1.75 m gives 70 / 1.75^2 = 22.9.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">US BMI formula</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              BMI = 703 * weight (lb) / height (in)^2
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Example: 165 lb and 69 in gives 703 * 165 / 69^2 = 24.4.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Common BMI formula mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Using height in centimeters directly instead of converting to meters.</li>
            <li>Forgetting to square height before dividing.</li>
            <li>Mixing kilograms with inches, or pounds with meters.</li>
            <li>Rounding too early, which can shift a borderline result.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to interpret the result</h2>
          <p className="mt-4 leading-8 text-slate-700">
            After calculating BMI, compare the result with adult BMI categories: below 18.5 is
            underweight, 18.5 to 24.9 is healthy weight, 25 to 29.9 is overweight, and 30 or above
            is obesity. These are broad screening ranges, not medical diagnoses.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            The calculator on BMI Checks applies the formula automatically and shows the adult
            category plus a healthy weight estimate for your height.
          </p>
          <Link href="/" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Calculate your BMI
          </Link>
        </section>
      </article>
    </main>
  );
}
