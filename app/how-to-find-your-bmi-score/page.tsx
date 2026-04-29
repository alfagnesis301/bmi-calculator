import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveAdSlot } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "How to Find Your BMI Score - Simple BMI Formula and Calculator",
  description:
    "Learn how to find your BMI score using height and weight, see the metric and US BMI formulas, and calculate your BMI online.",
  alternates: {
    canonical: "/how-to-find-your-bmi-score"
  }
};

const steps = [
  {
    title: "Measure your height",
    text: "Use centimetres for the metric formula, or feet and inches for the US formula. If you use feet and inches, convert the full height to inches before calculating."
  },
  {
    title: "Measure your weight",
    text: "Use kilograms for metric units or pounds for US units. A recent, consistent measurement gives the most useful estimate."
  },
  {
    title: "Apply the BMI formula",
    text: "Metric BMI is weight in kilograms divided by height in metres squared. US BMI is 703 times weight in pounds divided by height in inches squared."
  },
  {
    title: "Compare the score with adult BMI categories",
    text: "For most adults, 18.5 to 24.9 is the healthy BMI range, below 18.5 is underweight, 25 to 29.9 is overweight, and 30 or above is obesity."
  }
];

export default function HowToFindBMIScorePage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            BMI basics
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            How to Find Your BMI Score
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            To find your BMI score, you need your height and weight. You can calculate it manually
            with a formula or use a BMI calculator to get the number, adult category, and estimated
            healthy weight range in seconds.
          </p>
          <Link
            href="/#calculator"
            className="mt-6 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Use the BMI calculator
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="6666666666" className="min-h-28" />
      </div>

      <article className="mx-auto max-w-5xl space-y-8 px-4 pb-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How do I find my BMI score?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The fastest way to find your BMI score is to enter your height and weight into a BMI
            calculator. The calculator applies the correct formula, rounds the result, and places the
            score into an adult BMI category. You can also calculate it yourself if you know which
            unit system you are using.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="text-lg font-black text-ink">Metric BMI formula</h3>
              <p className="mt-2 font-mono text-sm text-slate-800">
                BMI = weightKg / (heightM * heightM)
              </p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="text-lg font-black text-ink">US BMI formula</h3>
              <p className="mt-2 font-mono text-sm text-slate-800">
                BMI = 703 * weightLb / (heightIn * heightIn)
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Step-by-step BMI calculation</h2>
          <div className="mt-6 grid gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-mist p-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-700">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black text-ink">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Example BMI score</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Suppose an adult weighs 70 kg and is 1.75 m tall. The metric calculation is 70 divided
            by 1.75 squared. That gives a BMI of about 22.9, which falls within the common adult
            healthy BMI range of 18.5 to 24.9.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            If using US units, suppose an adult weighs 165 lb and is 69 inches tall. The calculation
            is 703 times 165, divided by 69 squared. That gives a BMI of about 24.4.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">What your BMI score means</h2>
          <p className="mt-4 leading-8 text-slate-700">
            BMI is a screening number, not a diagnosis. A score below 18.5 is usually classified as
            underweight for adults. A score from 18.5 to 24.9 is usually considered the healthy BMI
            range. A score from 25 to 29.9 is classified as overweight, and 30 or higher is
            classified as obesity.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            BMI does not measure body fat directly and does not account for muscle mass, pregnancy,
            age-related body composition changes, or individual medical history. If your result
            concerns you, speak with a qualified healthcare provider.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#calculator"
              className="rounded-2xl bg-teal-700 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Calculate your BMI
            </Link>
            <Link
              href="/healthy-bmi-range"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-black text-ink transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Read about healthy BMI range
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
