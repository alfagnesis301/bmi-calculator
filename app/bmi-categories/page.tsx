import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/bmi-categories",
  title: "Adult BMI Categories - Underweight, Healthy, Overweight and Obesity",
  description:
    "Learn the standard adult BMI categories, what each range usually means, and why BMI categories are screening ranges rather than a medical diagnosis.",
});

const rows = [
  ["Below 18.5", "Underweight", "Weight may be below the standard healthy range for height."],
  ["18.5 to 24.9", "Healthy weight", "Weight is within the standard adult healthy BMI range."],
  ["25 to 29.9", "Overweight", "Weight is above the standard healthy range for height."],
  ["30 or above", "Obesity", "Weight is in the obesity range by standard adult BMI categories."]
];

const faq = [
  ["Are BMI categories a diagnosis?", "No. BMI categories are screening ranges. They can guide a conversation, but they do not diagnose health or body composition."],
  ["Do the categories apply to children?", "No. Children and teenagers need age- and sex-specific BMI percentiles rather than fixed adult ranges."],
  ["Why can BMI categories be misleading?", "BMI does not separate muscle, bone, fluid and fat, and it does not account for pregnancy, ethnicity, age or individual medical history."]
];

export default function BMICategoriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Adult BMI guide</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Adult BMI Categories</h1>
          <p className="mt-4 leading-8 text-slate-700">
            BMI categories group adult BMI results into broad ranges: underweight, healthy weight,
            overweight and obesity. They are useful for screening and education, but they are not a
            diagnosis and should be interpreted with personal context.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Standard adult BMI category table</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">Standard adult BMI categories</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 pr-4 font-black">Category</th>
                  <th className="py-3 font-black">How to interpret it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rows.map(([range, category, meaning]) => (
                  <tr key={range}>
                    <td className="py-3 pr-4 font-semibold">{range}</td>
                    <td className="py-3 pr-4">{category}</td>
                    <td className="py-3">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to use BMI categories responsibly</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Use the category as a first signal, not a conclusion. A healthy weight BMI does not
            guarantee health, and a BMI above or below the range does not diagnose disease. Waist
            circumference, body composition, fitness, medical history, age, pregnancy and ethnicity
            can all change how a BMI result should be interpreted.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            If your BMI result concerns you, or if your weight changed unexpectedly, speak with a
            qualified healthcare professional. They can interpret BMI alongside measurements and
            clinical history that an online calculator cannot collect.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI category FAQ</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            This page is for general informational use only and is not a substitute for professional
            medical advice, diagnosis or treatment.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Related guides</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-teal-700">
            <Link href="/">BMI Calculator</Link>
            <Link href="/bmi-formula">BMI Formula</Link>
            <Link href="/healthy-bmi-range">Healthy BMI Range</Link>
            <Link href="/bmi-chart">BMI Chart</Link>
          </div>
        </nav>
      </article>
    </main>
  );
}
