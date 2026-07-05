import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/StructuredData";

const PAGE_PATH = "/bmi-categories";
const PAGE_TITLE = "Adult BMI Categories: CDC Ranges & Classes (2026)";
const PAGE_DESCRIPTION =
  "Adult BMI categories (CDC): underweight below 18.5, healthy 18.5-24.9, overweight 25-29.9, obesity 30+. See every class, thresholds, and examples.";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  type: "article",
});

const categoryRows = [
  ["Below 18.5", "Underweight", "Weight may be below the standard adult reference range for height."],
  ["18.5 to 24.9", "Healthy weight", "Weight is within the commonly used adult healthy BMI range."],
  ["25 to 29.9", "Overweight", "Weight is above the standard healthy BMI range for height."],
  ["30 to 34.9", "Obesity class I", "BMI falls in the first obesity class used for adult screening."],
  ["35 to 39.9", "Obesity class II", "BMI falls in the second obesity class used for adult screening."],
  ["40 or above", "Obesity class III", "BMI falls in the highest standard adult obesity class."]
];

const examples = [
  ["1.70 m and 60 kg", "20.8", "Healthy weight"],
  ["1.70 m and 78 kg", "27.0", "Overweight"],
  ["1.70 m and 92 kg", "31.8", "Obesity class I"],
  ["5 ft 9 in and 150 lb", "22.1", "Healthy weight"],
  ["5 ft 9 in and 210 lb", "31.0", "Obesity class I"]
];

const faq = [
  ["What are the CDC adult BMI categories?", "Underweight (below 18.5), healthy weight (18.5 to 24.9), overweight (25.0 to 29.9), and obesity (30.0 and above), with obesity split into Class I, II and III."],
  ["What BMI is underweight for adults?", "Below 18.5. The CDC classes any adult BMI under 18.5 as underweight."],
  ["What is the normal or healthy adult BMI range?", "18.5 to 24.9. This is the healthy-weight band for adults aged 20 and older."],
  ["At what BMI does obesity start?", "At 30.0. A BMI of 30 or above is obesity; 30 to 34.9 is Class I, 35 to 39.9 is Class II, and 40+ is Class III."],
  ["What is the overweight BMI range?", "25.0 to 29.9, between the healthy band and obesity."],
  ["Are the CDC and NHS BMI categories the same?", "Yes, for adults. Both use the World Health Organization thresholds: below 18.5, 18.5 to 24.9, 25 to 29.9, and 30+."],
  ["Are BMI categories a diagnosis?", "No. BMI categories are screening ranges. They can guide a conversation, but they do not diagnose health, body fat, or disease risk for an individual."],
  ["Why do some sources say obesity starts at 30?", "The broad obesity category begins at BMI 30. Some clinical and public health references subdivide that range into class I, II, and III to describe severity more clearly."],
  ["Do BMI categories apply to children?", "No. Children and teenagers need age- and sex-specific BMI percentiles rather than fixed adult ranges."],
  ["Can a healthy BMI still miss health risks?", "Yes. BMI does not show waist circumference, blood pressure, blood sugar, cholesterol, fitness, or family history."],
  ["Can a high BMI be misleading?", "Yes. Athletes and people with high muscle mass may have a higher BMI without the same body fat level as another person with the same score."],
  ["When should I ask for professional advice?", "Consider speaking with a qualified healthcare professional if your BMI result concerns you, your weight changed unexpectedly, or you have symptoms, pregnancy, a medical condition, or a history of disordered eating."]
];

const references = [
  ["WHO obesity and overweight fact sheet", "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"],
  ["CDC adult BMI categories", "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html"],
  ["NHS BMI healthy weight calculator", "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults"]
];

export default function BMICategoriesPage() {
  const faqSchema = faq.map(([question, answer]) => ({ question, answer }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <StructuredData
        path={PAGE_PATH}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        faq={faqSchema}
      />
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Adult BMI guide</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">
            Adult BMI Categories (CDC): Underweight, Healthy, Overweight &amp; Obesity — 2026
          </h1>
          <p className="mt-4 leading-8 text-slate-700">
            BMI categories group adult BMI results into broad screening ranges. They are helpful for
            understanding where a result sits compared with standard adult cutoffs, but they are not
            a diagnosis and they do not describe a person&apos;s full health picture.
          </p>
          <div className="mt-5 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-700">Quick answer</p>
            <p className="mt-2 leading-8 text-slate-800">
              <strong>The CDC defines four adult BMI categories: underweight (below 18.5), healthy
              weight (18.5–24.9), overweight (25.0–29.9), and obesity (30.0 and above).</strong>{" "}
              Obesity is further split into Class I (30–34.9), Class II (35–39.9), and Class III
              (40+). These bands apply to adults aged 20 and older.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Complete adult BMI category table</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The table below uses common adult BMI cutoffs. It includes obesity classes because many
            public health references use those classes when BMI is 30 or above.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Adult BMI categories and obesity classes</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 pr-4 font-black">Category</th>
                  <th className="py-3 font-black">What it usually means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categoryRows.map(([range, category, meaning]) => (
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

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">What each category means</h2>
            <div className="mt-4 space-y-4 leading-8 text-slate-700">
              <p><strong>Underweight:</strong> BMI is below the adult reference range. Low BMI can have many causes, including nutrition, illness, medication, or body type.</p>
              <p><strong>Healthy weight:</strong> BMI is within the common adult reference range. This does not guarantee metabolic health or measure fitness.</p>
              <p><strong>Overweight:</strong> BMI is above the healthy range. Waist circumference, activity, and health history can add important context.</p>
              <p><strong>Obesity classes:</strong> BMI is 30 or above. Classes I, II, and III describe progressively higher BMI ranges, but still require clinical context.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Practical examples</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">Example BMI results and categories</caption>
                <thead className="border-b border-slate-200 text-ink">
                  <tr>
                    <th className="py-3 pr-4 font-black">Example</th>
                    <th className="py-3 pr-4 font-black">BMI</th>
                    <th className="py-3 font-black">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {examples.map(([example, bmi, category]) => (
                    <tr key={example}>
                      <td className="py-3 pr-4">{example}</td>
                      <td className="py-3 pr-4 font-semibold">{bmi}</td>
                      <td className="py-3">{category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Obesity classes explained</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The CDC splits obesity into three classes because health risk rises across the band. All
            three still begin at BMI 30, the point where the broad obesity category starts.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="sr-only">CDC adult obesity classes by BMI</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Class</th>
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 font-black">Common label</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Class I</td>
                  <td className="py-3 pr-4">30.0 to 34.9</td>
                  <td className="py-3">Moderate obesity</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Class II</td>
                  <td className="py-3 pr-4">35.0 to 39.9</td>
                  <td className="py-3">Severe obesity</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Class III</td>
                  <td className="py-3 pr-4">40.0 or above</td>
                  <td className="py-3">Very severe obesity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-8 text-slate-700">
            Class III (BMI 40+) is sometimes described as severe or extreme obesity in clinical
            settings and is where specialist interventions are most often considered. As always, the
            class is a screening band, not a diagnosis.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Why the CDC and NHS use the same thresholds</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The adult bands — below 18.5, 18.5 to 24.9, 25 to 29.9, and 30 or above — come from the
            World Health Organization and are adopted by both the CDC in the US and the NHS in the UK.
            That is why a search for CDC adult BMI categories returns the same numbers you would find
            on an NHS page. For adults, the classification is international and consistent, so you can
            use the same table wherever you are.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Limits of BMI categories</h2>
          <p className="mt-4 leading-8 text-slate-700">
            BMI is useful because it is simple, but the category can be less accurate for athletes
            and people with high muscle mass, older adults with lower muscle mass, pregnancy, some
            ethnic groups, and people with medical conditions that affect fluid balance or weight.
            Adult BMI categories should not be used to classify children or teenagers.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            If your category is unexpected, combine BMI with waist circumference, recent weight
            changes, medical history, and professional guidance. A qualified clinician can interpret
            your result alongside information an online calculator cannot collect.
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
