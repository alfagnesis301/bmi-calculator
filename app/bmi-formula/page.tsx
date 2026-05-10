import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/bmi-formula",
  title: "BMI Formula - Metric and US Body Mass Index Calculation",
  description:
    "Learn the BMI formula in metric and US units with step-by-step examples, conversion notes, common mistakes, limitations, and references.",
});

const examples = [
  ["70 kg, 175 cm", "70 / 1.75^2", "22.9"],
  ["82 kg, 180 cm", "82 / 1.80^2", "25.3"],
  ["165 lb, 69 in", "703 x 165 / 69^2", "24.4"],
  ["210 lb, 70 in", "703 x 210 / 70^2", "30.1"]
];

const faq = [
  ["Why is height squared in the BMI formula?", "BMI adjusts weight for height by dividing by height squared. This makes the number more comparable across adults of different heights than weight alone."],
  ["Do I use centimeters directly?", "No. In the metric formula, height must be in meters. Convert centimeters to meters first by dividing by 100."],
  ["Why does the US formula use 703?", "The 703 factor converts pounds and inches into the same scale as kilograms and meters."],
  ["Should I round my height or weight first?", "Avoid rounding early. Calculate with the most accurate measurements you have, then round the final BMI to one decimal place."],
  ["Is BMI the same for men and women?", "The formula is the same, but interpretation can differ because body composition and fat distribution vary between individuals."],
  ["Can BMI diagnose health?", "No. BMI is a screening calculation, not a diagnosis or a direct measure of body fat."]
];

const references = [
  ["CDC - About Adult BMI", "https://www.cdc.gov/bmi/about/index.html"],
  ["NHS - Calculate your BMI", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"],
  ["WHO - Obesity and overweight", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"]
];

export default function BMIFormulaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">BMI calculation</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">BMI Formula</h1>
          <p className="mt-4 leading-8 text-slate-700">
            BMI, or Body Mass Index, compares weight with height. It is commonly used as an adult
            screening calculation because it is fast, repeatable, and easy to explain. The result is
            still only a broad reference and does not measure body fat directly.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Metric BMI formula</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              BMI = weight (kg) / height (m)^2
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Measure weight in kilograms.</li>
              <li>Convert height from centimeters to meters by dividing by 100.</li>
              <li>Square the height in meters.</li>
              <li>Divide weight by the squared height.</li>
            </ol>
            <p className="mt-4 leading-8 text-slate-700">
              Example: 70 kg and 175 cm becomes 70 / 1.75^2 = 22.9.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">US BMI formula</h2>
            <p className="mt-4 rounded-2xl bg-mist p-5 font-mono text-sm text-slate-800">
              BMI = 703 x weight (lb) / height (in)^2
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Measure weight in pounds.</li>
              <li>Convert height to total inches.</li>
              <li>Square the height in inches.</li>
              <li>Multiply weight by 703, then divide by squared height.</li>
            </ol>
            <p className="mt-4 leading-8 text-slate-700">
              Example: 165 lb and 5 ft 9 in is 165 lb and 69 in, so BMI = 703 x 165 / 69^2 = 24.4.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Example BMI calculations</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">BMI formula examples</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Measurements</th>
                  <th className="py-3 pr-4 font-black">Calculation</th>
                  <th className="py-3 font-black">BMI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {examples.map(([measurements, calculation, bmi]) => (
                  <tr key={measurements}>
                    <td className="py-3 pr-4">{measurements}</td>
                    <td className="py-3 pr-4 font-mono text-xs">{calculation}</td>
                    <td className="py-3 font-semibold">{bmi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Common BMI formula mistakes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
              <li>Using height in centimeters directly instead of converting to meters.</li>
              <li>Using feet and inches separately instead of total inches.</li>
              <li>Forgetting to square height before dividing.</li>
              <li>Mixing kilograms with inches, or pounds with meters.</li>
              <li>Rounding height or weight before the calculation is finished.</li>
              <li>Treating the result as a complete health assessment.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Why height is squared</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Taller people naturally weigh more than shorter people. Squaring height is a simple
              statistical adjustment that makes weight more comparable across adult heights. It is not
              perfect, which is one reason BMI can misclassify some individuals.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The formula works best as a population screening tool. For individual decisions, it is
              better to consider waist circumference, body composition, symptoms, history, and advice
              from a qualified healthcare professional.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to interpret the result</h2>
          <p className="mt-4 leading-8 text-slate-700">
            After calculating BMI, compare the result with adult BMI categories: below 18.5 is
            underweight, 18.5 to 24.9 is healthy weight, 25 to 29.9 is overweight, and 30 or above
            falls in the obesity range. These are broad screening ranges, not medical diagnoses.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            The calculator on BMI Checks applies the formula automatically, reduces unit errors, and
            shows the adult category plus a healthy weight estimate for your height.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/" className="rounded-2xl bg-teal-700 px-5 py-3 font-black text-white">Calculate your BMI</Link>
            <Link href="/bmi-categories" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">BMI categories</Link>
            <Link href="/bmi-chart" className="rounded-2xl border border-teal-200 px-5 py-3 text-teal-700">BMI chart</Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI formula FAQ</h2>
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
            This page is for general informational use only and does not replace professional medical
            advice, diagnosis, or treatment.
          </p>
        </section>
      </article>
    </main>
  );
}
