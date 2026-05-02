import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveAdSlot } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "BMI Formula - Metric and US Body Mass Index Calculation",
  description:
    "Learn the BMI formula for metric and US units, see worked BMI examples, and calculate your body mass index online.",
  alternates: {
    canonical: "/bmi-formula"
  }
};

export default function BMIFormulaPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            BMI calculation
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            BMI Formula for Metric and US Units
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            The BMI formula compares weight with height. The metric formula uses kilograms and
            metres, while the US formula uses pounds and inches with a conversion factor of 703.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="8888888888" className="min-h-28" />
      </div>

      <article className="mx-auto max-w-5xl space-y-8 px-4 pb-14 sm:px-6 lg:px-8">
        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Metric BMI formula</h2>
            <p className="mt-4 font-mono text-sm text-slate-800">
              BMI = weightKg / (heightM * heightM)
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Divide weight in kilograms by height in metres squared. For example, 70 kg and 1.75 m
              gives 70 / (1.75 * 1.75), which is about 22.9.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">US BMI formula</h2>
            <p className="mt-4 font-mono text-sm text-slate-800">
              BMI = 703 * weightLb / (heightIn * heightIn)
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Multiply weight in pounds by 703, then divide by height in inches squared. For
              example, 165 lb and 69 inches gives about 24.4.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Why the US formula uses 703</h2>
          <p className="mt-4 leading-8 text-slate-700">
            BMI was originally expressed using kilograms and metres. Pounds and inches are different
            units, so the US formula includes 703 as a conversion factor. The goal is to produce the
            same type of BMI score no matter which unit system you use.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            A calculator helps avoid conversion mistakes, especially when height is entered as feet
            and inches. The final BMI number is usually rounded to one decimal place for easier
            reading.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">After calculating BMI</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Once you have a BMI score, compare it with adult BMI categories. Below 18.5 is usually
            underweight, 18.5 to 24.9 is the healthy BMI range, 25 to 29.9 is overweight, and 30 or
            higher is obesity. These categories are screening ranges and should be interpreted with
            context.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-2xl bg-teal-700 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-teal-600" href="/#calculator">
              Use the BMI calculator
            </Link>
            <Link className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-black text-ink transition hover:bg-slate-50" href="/bmi-categories">
              See BMI categories
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            This calculator is for general informational purposes only and does not replace
            professional medical advice. Always consult a qualified healthcare provider for personal
            health concerns.
          </p>
        </section>
      </article>
    </main>
  );
}
