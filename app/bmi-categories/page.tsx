import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveAdSlot } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "BMI Categories for Adults - Underweight, Healthy, Overweight and Obesity",
  description:
    "Understand adult BMI categories, including underweight, healthy BMI range, overweight and obesity, plus why BMI categories need context.",
  alternates: {
    canonical: "/bmi-categories"
  }
};

const categories = [
  {
    label: "Underweight",
    range: "Below 18.5",
    summary:
      "A BMI below 18.5 is usually classified as underweight for adults. It can be worth discussing if it is unexpected or linked with symptoms."
  },
  {
    label: "Healthy BMI range",
    range: "18.5 to 24.9",
    summary:
      "This is the commonly used adult healthy-weight range. It is a screening category, not a guarantee of overall health."
  },
  {
    label: "Overweight",
    range: "25 to 29.9",
    summary:
      "This range suggests body weight is above the common healthy BMI range for height, but BMI should be interpreted with other health measures."
  },
  {
    label: "Obesity",
    range: "30 or higher",
    summary:
      "A BMI of 30 or higher is in the adult obesity range. A healthcare provider can interpret this alongside personal risk factors."
  }
];

export default function BMICategoriesPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            Adult BMI guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            BMI Categories for Adults
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Adult BMI categories group a BMI score into underweight, healthy BMI range, overweight
            or obesity. These categories help with screening, but they do not diagnose health on
            their own.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="7777777777" className="min-h-28" />
      </div>

      <article className="mx-auto max-w-5xl space-y-8 px-4 pb-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Adult BMI category table</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Adult BMI categories table</caption>
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">Category</th>
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 font-black">What it can mean</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categories.map((category) => (
                  <tr key={category.label}>
                    <td className="py-4 pr-4 font-semibold text-ink">{category.label}</td>
                    <td className="py-4 pr-4 font-semibold">{category.range}</td>
                    <td className="py-4 leading-7">{category.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How BMI categories are used</h2>
          <p className="mt-4 leading-8 text-slate-700">
            BMI categories are a quick way to compare weight with height for adults. They are useful
            for public health research and as a first screening tool in everyday health discussions.
            A category can suggest when weight might deserve a closer look, but it does not explain
            body composition, fitness, medical history or where body fat is carried.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Two adults can have the same BMI category and very different health profiles. For that
            reason, BMI is best combined with other markers such as waist measurement, blood
            pressure, cholesterol, blood sugar, activity level and personal medical history.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Useful next steps</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/">
              Calculate your BMI
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/healthy-bmi-range">
              Healthy BMI range
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/bmi-chart">
              View BMI chart
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/how-to-find-your-bmi-score">
              Find your BMI score
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
