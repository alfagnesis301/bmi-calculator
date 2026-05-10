import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/bmi-chart",
  title: "BMI Chart for Adults - Read BMI Ranges by Height and Weight",
  description:
    "Use this adult BMI chart guide to understand BMI ranges, categories, limitations, and when a calculator is more accurate than a chart.",
});

const rows = [
  ["5 ft 0 in", "95-127 lb", "128-153 lb", "154 lb or above"],
  ["5 ft 4 in", "108-145 lb", "146-174 lb", "175 lb or above"],
  ["5 ft 8 in", "122-164 lb", "165-197 lb", "198 lb or above"],
  ["6 ft 0 in", "137-183 lb", "184-220 lb", "221 lb or above"],
  ["6 ft 4 in", "152-204 lb", "205-245 lb", "246 lb or above"]
];

export default function BMIChartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Adult BMI reference</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">BMI Chart for Adults</h1>
          <p className="mt-4 leading-8 text-slate-700">
            A BMI chart helps you compare height and weight with standard adult BMI categories. A
            calculator is usually more precise, but a chart is useful for quick context.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Example adult BMI chart</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Approximate adult BMI weight ranges by height</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Height</th>
                  <th className="py-3 pr-4 font-black">Healthy weight</th>
                  <th className="py-3 pr-4 font-black">Overweight</th>
                  <th className="py-3 font-black">Obesity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rows.map(([height, healthy, overweight, obesity]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3 pr-4">{healthy}</td>
                    <td className="py-3 pr-4">{overweight}</td>
                    <td className="py-3">{obesity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Ranges are rounded and based on adult BMI cutoffs. Use the calculator for exact values.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI chart vs calculator</h2>
          <p className="mt-4 leading-8 text-slate-700">
            A chart is easy to scan, but it can hide decimal differences and rounded boundaries. A
            calculator applies the BMI formula directly to your exact measurements and is less prone
            to lookup errors.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Neither a chart nor a calculator can diagnose health. BMI does not account for muscle
            mass, pregnancy, age, ethnicity or individual medical conditions.
          </p>
          <Link href="/" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Use the BMI calculator
          </Link>
        </section>
      </article>
    </main>
  );
}
