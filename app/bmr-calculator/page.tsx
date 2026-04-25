import type { Metadata } from "next";
import { BMRCalculator } from "./BMRCalculator";

export const metadata: Metadata = {
  title: "BMR Calculator – Basal Metabolic Rate Calculator",
  description: "Calculate your Basal Metabolic Rate (BMR) and daily calorie needs using the Mifflin-St Jeor equation. Free online BMR calculator.",
  alternates: { canonical: "/bmr-calculator" }
};

const faq = [
  {
    q: "What is the difference between BMR and TDEE?",
    a: "BMR (Basal Metabolic Rate) is the calories your body needs at complete rest — to keep your heart beating, lungs breathing, and cells functioning. TDEE (Total Daily Energy Expenditure) multiplies your BMR by an activity factor to estimate how many calories you actually burn in a day, including physical activity."
  },
  {
    q: "Which BMR formula is most accurate?",
    a: "The Mifflin-St Jeor equation, used by this calculator, is considered the most accurate for most non-obese adults by the Academy of Nutrition and Dietetics. Older formulas like Harris-Benedict tend to overestimate BMR slightly."
  },
  {
    q: "Does BMR change over time?",
    a: "Yes. BMR naturally decreases with age, partly because muscle mass tends to decline and muscle is metabolically more active than fat. Hormonal changes, illness, medications, and significant weight changes can also affect BMR."
  },
  {
    q: "Can I use BMR to plan a diet?",
    a: "BMR is a useful starting reference, but dietary planning should account for your full TDEE plus individual factors. Eating below your BMR for extended periods is generally not recommended without medical supervision, as it can reduce muscle mass and slow metabolism."
  },
  {
    q: "Why does gender affect BMR?",
    a: "On average, men have more lean muscle mass than women of the same height and weight, which increases metabolic rate. The Mifflin-St Jeor formula adds 5 kcal for men and subtracts 161 kcal for women to account for this average difference."
  },
  {
    q: "Is BMR the same as resting metabolic rate (RMR)?",
    a: "They are closely related but not identical. BMR is measured under very strict conditions — fasting, complete rest, neutral temperature. RMR is measured at rest but without such strict controls, so RMR is typically 10–20% higher than true BMR. Most online calculators, including this one, estimate RMR but commonly label it as BMR."
  }
];

const references = [
  { label: "Mifflin MD et al. (1990) — A new predictive equation for resting energy expenditure", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
  { label: "Academy of Nutrition and Dietetics — Estimating energy needs", href: "https://www.eatright.org/" },
  { label: "CDC — Physical activity and health", href: "https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm" },
  { label: "NHS — Calories: how to get the balance right", href: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/" }
];

export default function BMRPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-violet-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-violet-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700">
            Free health tool
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            BMR Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Find your Basal Metabolic Rate — the calories your body burns at rest — and estimate your
            daily energy needs based on your activity level.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <BMRCalculator />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How to use this calculator</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
            <li>Select your gender.</li>
            <li>Enter your age, height in cm, and weight in kg.</li>
            <li>Choose the activity level that best describes your typical week.</li>
            <li>Click <strong>Calculate BMR</strong>.</li>
            <li>The result shows your BMR (calories at rest) and your estimated TDEE (total daily calories).</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">What is BMR?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic
            physiological functions — breathing, circulation, cell production, and temperature
            regulation — while completely at rest. It represents the minimum energy required to keep
            you alive over 24 hours.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            BMR accounts for roughly 60–75% of total daily energy expenditure for most people. The
            remaining calories are used during physical activity and digesting food. Knowing your BMR
            helps estimate how many calories you need each day to maintain, lose, or gain weight.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Mifflin-St Jeor equation</h2>
          <p className="mt-4 leading-8 text-slate-700">
            This calculator uses the Mifflin-St Jeor equation, considered the most accurate BMR
            formula for most adults by major nutrition organisations.
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Men</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Women</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Example (male, 30 years, 175 cm, 70 kg)</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">BMR = 10×70 + 6.25×175 − 5×30 + 5 = 700 + 1093.75 − 150 + 5 = <strong>1,649 kcal</strong></p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>BMR formulas are population averages — individual metabolic rates can vary by ±15% or more.</li>
            <li>The formula does not account for muscle-to-fat ratio; a muscular person will likely have a higher true BMR than the formula predicts.</li>
            <li>Activity level multipliers are estimates. Most people overestimate how active they are.</li>
            <li>Medical conditions, hormonal disorders (e.g. thyroid conditions), and certain medications can significantly alter actual metabolic rate.</li>
            <li>BMR naturally declines with age; the formula partially accounts for this but not individual variation in the rate of decline.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none text-base font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.q}
                    <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-sm text-teal-700 group-open:hidden">+</span>
                    <span className="hidden shrink-0 rounded-full bg-mist px-3 py-1 text-sm text-teal-700 group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">References</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-teal-800">
            {references.map((r) => (
              <li key={r.href}>
                <a href={r.href} className="underline-offset-4 hover:underline" rel="noreferrer" target="_blank">{r.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Health disclaimer</h2>
          <p className="mt-3 leading-8 text-slate-800">
            This calculator is for general informational purposes only and does not replace
            professional medical advice. Always consult a qualified healthcare provider for
            personal health concerns.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Related tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "BMI Calculator", href: "/" },
              { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
              { name: "Calorie Calculator", href: "/calorie-calculator" },
              { name: "Body Fat Calculator", href: "/body-fat-calculator" }
            ].map((t) => (
              <a key={t.href} href={t.href}
                className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50">
                {t.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
