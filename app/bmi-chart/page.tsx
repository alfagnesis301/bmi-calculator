import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/StructuredData";

const PAGE_PATH = "/bmi-chart";
const PAGE_TITLE = "BMI Chart for Adults - Height and Weight Ranges";
const PAGE_DESCRIPTION =
  "Use this adult BMI chart to read healthy weight, overweight, and obesity ranges by height, with metric and US examples, limitations, and FAQs.";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  type: "article",
});

const usRows = [
  ["5 ft 0 in", "95-127 lb", "128-153 lb", "154 lb or above"],
  ["5 ft 2 in", "101-136 lb", "137-163 lb", "164 lb or above"],
  ["5 ft 4 in", "108-145 lb", "146-174 lb", "175 lb or above"],
  ["5 ft 6 in", "115-154 lb", "155-185 lb", "186 lb or above"],
  ["5 ft 8 in", "122-164 lb", "165-197 lb", "198 lb or above"],
  ["5 ft 10 in", "129-173 lb", "174-208 lb", "209 lb or above"],
  ["6 ft 0 in", "137-183 lb", "184-220 lb", "221 lb or above"],
  ["6 ft 2 in", "145-194 lb", "195-233 lb", "234 lb or above"],
  ["6 ft 4 in", "152-204 lb", "205-245 lb", "246 lb or above"]
];

const metricRows = [
  ["150 cm", "41.6-56.0 kg", "56.3-67.3 kg", "67.5 kg or above"],
  ["160 cm", "47.4-63.7 kg", "64.0-76.5 kg", "76.8 kg or above"],
  ["170 cm", "53.5-72.0 kg", "72.3-86.4 kg", "86.7 kg or above"],
  ["180 cm", "59.9-80.7 kg", "81.0-96.9 kg", "97.2 kg or above"],
  ["190 cm", "66.8-89.9 kg", "90.3-108.0 kg", "108.3 kg or above"],
  ["200 cm", "74.0-99.6 kg", "100.0-119.6 kg", "120.0 kg or above"]
];

const faq = [
  ["How do I read a BMI chart?", "Find the row closest to your height, then compare your weight with the ranges in that row. Use a calculator for an exact BMI value."],
  ["Is a BMI chart as accurate as a calculator?", "No. A chart uses rounded heights and weights, while a calculator uses your exact measurements."],
  ["Why are some values rounded?", "BMI category boundaries often produce decimal weights. A chart rounds them to make the table easier to read."],
  ["Can this chart be used for children?", "No. Children and teenagers need BMI percentiles based on age and sex."],
  ["Does a BMI chart diagnose health?", "No. A BMI chart is a screening reference and does not measure body fat or diagnose medical conditions."]
];

const references = [
  ["CDC - Adult BMI categories", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS - BMI healthy weight calculator", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"],
  ["WHO - Obesity and overweight", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"]
];

export default function BMIChartPage() {
  const faqSchema = faq.map(([question, answer]) => ({ question, answer }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <StructuredData path={PAGE_PATH} title={PAGE_TITLE} description={PAGE_DESCRIPTION} faq={faqSchema} />
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Adult BMI reference</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">BMI Chart for Adults</h1>
          <p className="mt-4 leading-8 text-slate-700">
            A BMI chart helps you compare height and weight with standard adult BMI ranges. It is
            useful for quick context, while a BMI calculator is better for exact measurements and
            borderline results.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">US BMI chart by height</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Approximate US adult BMI weight ranges by height</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Height</th>
                  <th className="py-3 pr-4 font-black">Healthy weight</th>
                  <th className="py-3 pr-4 font-black">Overweight</th>
                  <th className="py-3 font-black">Obesity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {usRows.map(([height, healthy, overweight, obesity]) => (
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
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Metric BMI chart by height</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Approximate metric adult BMI weight ranges by height</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Height</th>
                  <th className="py-3 pr-4 font-black">Healthy weight</th>
                  <th className="py-3 pr-4 font-black">Overweight</th>
                  <th className="py-3 font-black">Obesity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {metricRows.map(([height, healthy, overweight, obesity]) => (
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

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">How to read the chart</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
              <li>Choose the table that matches your preferred units.</li>
              <li>Find the closest height row.</li>
              <li>Compare your weight with the category ranges in that row.</li>
              <li>If you are near a boundary, calculate BMI directly instead of relying on the chart.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Chart vs calculator</h2>
            <p className="mt-4 leading-8 text-slate-700">
              A chart is quick to scan, but it uses rounded values. A calculator applies the BMI
              formula to your exact height and weight, which reduces lookup errors and gives a
              decimal result.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Both tools use the same adult BMI categories. Neither tool can diagnose health or
              measure body fat directly.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Common interpretation mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Using adult chart ranges for children or teenagers.</li>
            <li>Assuming a rounded chart boundary is more precise than a calculator.</li>
            <li>Ignoring waist circumference, body composition, and health history.</li>
            <li>Treating BMI category labels as a diagnosis.</li>
            <li>Using BMI during pregnancy without professional guidance.</li>
          </ul>
          <Link href="/" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Use the BMI calculator
          </Link>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI chart FAQ</h2>
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
            This page is for general informational use only and is not a substitute for professional
            medical advice, diagnosis, or treatment.
          </p>
        </section>
      </article>
    </main>
  );
}
