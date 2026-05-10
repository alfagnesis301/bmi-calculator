import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/healthy-bmi-range",
  title: "Healthy BMI Range for Adults - 18.5 to 24.9 Explained",
  description:
    "Learn what the healthy BMI range of 18.5 to 24.9 means for adults, when it may be less accurate, examples by height, and responsible next steps.",
});

const categories = [
  ["Underweight", "Below 18.5"],
  ["Healthy BMI range", "18.5 to 24.9"],
  ["Overweight", "25 to 29.9"],
  ["Obesity", "30 or higher"]
];

const heightExamples = [
  ["5 ft 2 in", "101 to 136 lb"],
  ["5 ft 6 in", "115 to 154 lb"],
  ["5 ft 10 in", "129 to 173 lb"],
  ["6 ft 0 in", "137 to 183 lb"],
  ["160 cm", "47.4 to 63.7 kg"],
  ["170 cm", "53.5 to 72.0 kg"],
  ["180 cm", "59.9 to 80.7 kg"],
  ["190 cm", "66.8 to 89.9 kg"]
];

const faq = [
  ["What BMI range is considered healthy for adults?", "For most adults, 18.5 to 24.9 is commonly described as the healthy weight BMI range."],
  ["Is the healthy BMI range universal?", "No. BMI does not account for body composition, pregnancy, ethnicity, age, or individual medical history."],
  ["Can someone be healthy outside the range?", "Possibly. BMI is only one screening measure. A clinician may consider waist circumference, blood tests, activity level, symptoms, and history."],
  ["Can someone have health risks inside the range?", "Yes. BMI does not show blood pressure, cholesterol, blood sugar, smoking, fitness, or diet quality."],
  ["What should I do if my BMI is below 18.5?", "Avoid self-diagnosis. If low BMI is unexpected or accompanied by symptoms, speak with a qualified healthcare professional."],
  ["What should I do if my BMI is above 24.9?", "Use the result as a starting point. Consider waist circumference, habits, and medical history, and seek professional advice if you are concerned."]
];

const references = [
  ["WHO - Obesity and overweight", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"],
  ["CDC - Adult BMI categories", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS - BMI healthy weight calculator", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"]
];

export default function HealthyBMIRangePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Adult BMI guide</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">
            Healthy BMI Range for Adults: 18.5 to 24.9 Explained
          </h1>
          <p className="mt-4 leading-8 text-slate-700">
            For most adults, a BMI between 18.5 and 24.9 is commonly described as the healthy BMI
            range. It is a useful reference for screening, but it is not a complete assessment of
            health and should be interpreted with personal context.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">What 18.5 to 24.9 means</h2>
            <p className="mt-4 leading-8 text-slate-700">
              BMI compares weight with height. A result from 18.5 to 24.9 falls inside the standard
              adult healthy weight category. At a population level, this range is often associated
              with lower weight-related risk than very low or very high BMI ranges.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              For an individual, the range is a reference rather than a target. Two people with the
              same BMI can have different waist measurements, muscle mass, medical histories, and
              metabolic health markers.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Adult BMI categories</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">Adult BMI category table</caption>
                <thead className="border-b border-slate-200 text-ink">
                  <tr>
                    <th className="py-3 pr-4 font-black">Category</th>
                    <th className="py-3 font-black">BMI range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {categories.map(([label, range]) => (
                    <tr key={label}>
                      <td className="py-3 pr-4 font-semibold">{label}</td>
                      <td className="py-3">{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Example healthy weight ranges by height</h2>
          <p className="mt-4 leading-8 text-slate-700">
            These examples show the approximate weight range that corresponds to BMI 18.5 to 24.9
            for several heights. Values are rounded, so use the calculator for your exact height.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <caption className="sr-only">Healthy BMI weight examples by height</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Height</th>
                  <th className="py-3 font-black">Approximate weight for BMI 18.5 to 24.9</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {heightExamples.map(([height, range]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Why the healthy range is not universal</h2>
          <div className="mt-4 space-y-4 leading-8 text-slate-700">
            <p>
              BMI does not account for muscle mass, bone structure, body fat distribution, pregnancy,
              ethnicity, age, or individual medical conditions. A muscular adult may have a BMI above
              24.9 with relatively low body fat, while an older adult may have a BMI in range but
              lower muscle mass.
            </p>
            <p>
              Some people also have metabolic risk factors such as high blood pressure, abnormal
              cholesterol, or high blood sugar even when BMI is within the healthy range. That is why
              BMI should be one starting point, not the only measure.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">What to do if you are outside the range</h2>
          <p className="mt-4 leading-8 text-slate-700">
            If your BMI is below 18.5 or above 24.9, the next step is not panic or self-diagnosis.
            Review your broader health picture: recent weight change, waist size, activity level,
            appetite, sleep, medications, blood pressure, cholesterol, blood sugar, and symptoms.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Professional guidance is especially important if weight changed unexpectedly, if you are
            pregnant, if you have a medical condition, or if you are considering a major change to
            diet or exercise.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/" className="rounded-2xl bg-teal-700 px-5 py-3 font-black text-white">Calculate your BMI</Link>
            <Link href="/bmi-categories" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">BMI categories</Link>
            <Link href="/bmi-formula" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">BMI formula</Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Healthy BMI range FAQ</h2>
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
          <h2 className="text-2xl font-black text-ink">References</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {references.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer" target="_blank">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            This page is for general informational purposes only and does not replace professional
            medical advice. Always consult a qualified healthcare provider for personal health concerns.
          </p>
        </section>
      </article>
    </main>
  );
}
