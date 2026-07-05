import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/StructuredData";

const PAGE_PATH = "/health-calculators";
const PAGE_TITLE = "Free Health Calculators - BMI, BMR, Calories and Body Fat";
const PAGE_DESCRIPTION =
  "Use free browser-based health calculators for BMI, BMR, daily calories, ideal weight, and body fat, with privacy notes and responsible-use guidance.";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const tools = [
  {
    name: "BMI Calculator",
    href: "/",
    description:
      "Calculate Body Mass Index using metric or US units. See your adult BMI category and an estimated healthy weight range for your height.",
    bestFor: "Adult weight category screening",
    useWithCare: "Does not measure body fat directly.",
    tags: ["Body weight", "Metric and US units", "Adult screening"],
    color: "border-teal-200 bg-teal-50 text-teal-700"
  },
  {
    name: "Ideal Weight Calculator",
    href: "/ideal-weight-calculator",
    description:
      "Estimate reference weights using the Devine, Robinson, and Miller formulas. Results are shown for all three formulas plus an average.",
    bestFor: "Formula-based reference weights",
    useWithCare: "Not a required target weight.",
    tags: ["Ideal weight", "3 formulas", "Height and gender"],
    color: "border-sky-200 bg-sky-50 text-sky-700"
  },
  {
    name: "BMR Calculator",
    href: "/bmr-calculator",
    description:
      "Estimate Basal Metabolic Rate and total daily energy expenditure using the Mifflin-St Jeor equation and an activity multiplier.",
    bestFor: "Resting calorie needs and TDEE",
    useWithCare: "Activity multipliers are estimates.",
    tags: ["Basal metabolic rate", "TDEE", "Mifflin-St Jeor"],
    color: "border-violet-200 bg-violet-50 text-violet-700"
  },
  {
    name: "Calorie Calculator",
    href: "/calorie-calculator",
    description:
      "Estimate daily calorie needs for maintenance, gradual loss, or gain. Results are based on BMR, activity level, and goal.",
    bestFor: "Maintenance, loss, or gain targets",
    useWithCare: "Avoid extreme deficits without professional advice.",
    tags: ["Daily calories", "Weight goals", "Activity level"],
    color: "border-amber-200 bg-amber-50 text-amber-700"
  },
  {
    name: "Body Fat Calculator",
    href: "/body-fat-calculator",
    description:
      "Estimate body fat percentage using the US Navy circumference method. It uses height, neck, waist, and hip measurements when needed.",
    bestFor: "Circumference-based body composition estimate",
    useWithCare: "Measurement technique affects the result.",
    tags: ["Body fat percent", "US Navy method", "Tape measure"],
    color: "border-rose-200 bg-rose-50 text-rose-700"
  }
];

const faq = [
  ["Are these calculators medical tools?", "No. They are educational estimates and screening tools. They do not diagnose health conditions or replace professional medical advice."],
  ["Do you store calculator inputs?", "No account is required and calculations are processed in your browser. BMI Checks does not need to send your measurements to a server to calculate results."],
  ["Which calculator should I start with?", "Start with BMI for a quick adult screening category, then use BMR and calorie calculators if you want energy estimates."],
  ["Can I use these tools while pregnant?", "Pregnancy changes weight and body composition. Use standard adult calculators cautiously and ask a qualified healthcare professional for personal guidance."],
  ["Can children use these calculators?", "Adult BMI categories and several formulas are not designed for children. Pediatric interpretation usually requires age- and sex-specific tools."]
];

export default function HealthCalculatorsPage() {
  const faqSchema = faq.map(([question, answer]) => ({ question, answer }));

  return (
    <main>
      <StructuredData path={PAGE_PATH} title={PAGE_TITLE} description={PAGE_DESCRIPTION} faq={faqSchema} />
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Free tools, no account required
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Free Health Calculators
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            BMI Checks provides practical, browser-based calculators for common health estimates:
            BMI, BMR, daily calories, ideal weight, and body fat percentage. Each tool is designed
            for quick education and careful interpretation, not diagnosis.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">When to use each calculator</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Use these calculators when you want a starting point: a BMI category, an estimated
            resting metabolism, a calorie target, a formula-based reference weight, or a body fat
            estimate from tape measurements. For medical decisions, combine the result with context
            such as symptoms, waist circumference, lab results, medical history, and professional
            guidance.
          </p>
        </section>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-line transition hover:border-teal-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <h2 className="text-xl font-black text-ink transition group-hover:text-teal-700">
                {tool.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-700">{tool.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-bold ${tool.color}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-sm font-bold text-teal-700 underline-offset-4 group-hover:underline">
                Open calculator
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Calculator comparison</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of BMI Checks calculators</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Tool</th>
                  <th className="py-3 pr-4 font-black">Best for</th>
                  <th className="py-3 pr-4 font-black">Inputs</th>
                  <th className="py-3 font-black">Use responsibly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {tools.map((tool) => (
                  <tr key={tool.name}>
                    <td className="py-3 pr-4 font-semibold">{tool.name}</td>
                    <td className="py-3 pr-4">{tool.bestFor}</td>
                    <td className="py-3 pr-4">{tool.tags.join(", ")}</td>
                    <td className="py-3">{tool.useWithCare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Which calculator should I use?</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Start with the BMI Calculator if you want a quick adult screening category. Use the
              BMR Calculator when you want resting energy needs, then the Calorie Calculator when
              you want a daily calorie estimate based on activity and goal. Use Ideal Weight and
              Body Fat calculators for extra context, not as final answers.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-2xl font-black text-ink">Privacy and local calculations</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Calculator inputs are processed in your browser. BMI Checks does not require an account
              and does not ask for your name. If a tool offers local saving, that data stays on your
              own device unless you choose to share it.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Responsible use</h2>
          <p className="mt-4 leading-8 text-slate-700">
            All calculators on BMI Checks use standard, widely published formulas from public health
            guidance or peer-reviewed research. Results are estimates based on population averages.
            They can help you ask better questions, but they cannot assess your complete health,
            diagnose a condition, or replace advice from a qualified healthcare professional.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
            <Link href="/editorial-policy" className="underline-offset-4 hover:underline">Editorial Policy</Link>
            <Link href="/about" className="underline-offset-4 hover:underline">About BMI Checks</Link>
            <Link href="/contact" className="underline-offset-4 hover:underline">Contact</Link>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Health calculator FAQ</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Health disclaimer</h2>
          <p className="mt-3 leading-8 text-slate-800">
            All tools on this site are for general informational purposes only and do not replace
            professional medical advice. Always consult a qualified healthcare provider for personal
            health concerns.
          </p>
        </section>
      </div>
    </main>
  );
}
