import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Health Calculators – BMI Checks",
  description: "Free online health calculators: BMI, Ideal Weight, BMR, Daily Calories, and Body Fat. All tools work in your browser with no account required.",
  alternates: { canonical: "/health-calculators" }
};

const tools = [
  {
    name: "BMI Calculator",
    href: "/",
    description:
      "Calculate your Body Mass Index using metric or US units. See your adult BMI category and an estimated healthy weight range for your height.",
    tags: ["Body weight", "Metric & US units", "Adult screening"],
    color: "border-teal-200 bg-teal-50 text-teal-700"
  },
  {
    name: "Ideal Weight Calculator",
    href: "/ideal-weight-calculator",
    description:
      "Estimate your ideal body weight using the Devine, Robinson, and Miller formulas. Results are shown for all three formulas plus an average.",
    tags: ["Ideal weight", "3 formulas", "By height & gender"],
    color: "border-sky-200 bg-sky-50 text-sky-700"
  },
  {
    name: "BMR Calculator",
    href: "/bmr-calculator",
    description:
      "Find your Basal Metabolic Rate — the calories your body burns at complete rest — and estimate your total daily energy expenditure by activity level.",
    tags: ["Basal metabolic rate", "TDEE", "Mifflin-St Jeor"],
    color: "border-violet-200 bg-violet-50 text-violet-700"
  },
  {
    name: "Calorie Calculator",
    href: "/calorie-calculator",
    description:
      "Estimate your daily calorie needs for weight maintenance, gradual loss, or gain. Results shown across five goal levels based on your TDEE.",
    tags: ["Daily calories", "Weight loss", "Weight gain"],
    color: "border-amber-200 bg-amber-50 text-amber-700"
  },
  {
    name: "Body Fat Calculator",
    href: "/body-fat-calculator",
    description:
      "Estimate your body fat percentage using the US Navy circumference method. Only a tape measure required — no specialist equipment needed.",
    tags: ["Body fat %", "US Navy method", "Tape measure"],
    color: "border-rose-200 bg-rose-50 text-rose-700"
  }
];

export default function HealthCalculatorsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            All tools — free, no account required
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Free Health Calculators
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            A growing collection of free, browser-based health tools. All calculators run locally in
            your browser — no data is sent to a server, and no account is needed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-line transition hover:border-teal-300 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <h2 className="text-xl font-black text-ink group-hover:text-teal-700 transition">
                {tool.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-700">{tool.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${tool.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-sm font-bold text-teal-700 group-hover:underline underline-offset-4">
                Open calculator →
              </span>
            </a>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">About these tools</h2>
          <p className="mt-4 leading-8 text-slate-700">
            All calculators on BMI Checks use standard, widely published formulas from peer-reviewed
            research and public health organisations including the WHO, CDC, NHS, and ACE. Results
            are estimates based on population averages and are provided for general informational
            purposes only.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            No personal data you enter is stored on our servers. Optional local saving uses your
            browser&apos;s localStorage and stays on your device. For health decisions, always consult a
            qualified healthcare provider.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
            <a href="/editorial-policy" className="underline-offset-4 hover:underline">Editorial Policy</a>
            <a href="/about" className="underline-offset-4 hover:underline">About BMI Checks</a>
            <a href="/contact" className="underline-offset-4 hover:underline">Contact</a>
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
