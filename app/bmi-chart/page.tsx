import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveAdSlot } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "BMI Chart for Adults - Body Mass Index Ranges Explained",
  description:
    "Use this adult BMI chart to understand body mass index ranges, including underweight, healthy BMI range, overweight and obesity.",
  alternates: {
    canonical: "/bmi-chart"
  }
};

const rows = [
  ["Below 18.5", "Underweight"],
  ["18.5 to 24.9", "Healthy BMI range"],
  ["25 to 29.9", "Overweight"],
  ["30 to 34.9", "Obesity class I"],
  ["35 to 39.9", "Obesity class II"],
  ["40 or higher", "Obesity class III"]
];

export default function BMIChartPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            BMI reference
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            BMI Chart for Adults
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            This adult BMI chart shows how body mass index scores are commonly grouped. Use it as a
            quick reference after calculating your BMI, and remember that BMI is only a screening
            measure.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="9999999999" className="min-h-28" />
      </div>

      <article className="mx-auto max-w-5xl space-y-8 px-4 pb-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Adult BMI chart</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Adult BMI chart by range and category</caption>
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 font-black">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rows.map(([range, category]) => (
                  <tr key={range}>
                    <td className="py-4 pr-4 font-semibold">{range}</td>
                    <td className="py-4">{category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to read a BMI chart</h2>
          <p className="mt-4 leading-8 text-slate-700">
            First calculate your BMI using your height and weight. Then find the range in the chart
            that contains your score. For example, a BMI of 22 is in the healthy BMI range, while a
            BMI of 27 is in the overweight range.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Some BMI charts split obesity into classes. This can be useful for clinical discussions,
            but it still does not diagnose health. A clinician may consider waist measurement, blood
            pressure, cholesterol, blood sugar, symptoms and medical history.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Related BMI guides</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/">
              Calculate your BMI
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/bmi-formula">
              BMI formula
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/bmi-categories">
              BMI categories
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/healthy-bmi-range">
              Healthy BMI range
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
