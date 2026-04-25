import type { Metadata } from "next";
import { IdealWeightCalculator } from "./IdealWeightCalculator";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator – Find Your Healthy Weight Range",
  description: "Use this free ideal weight calculator to estimate your healthy weight range by height and gender using the Devine, Robinson, and Miller formulas.",
  alternates: { canonical: "/ideal-weight-calculator" }
};

const faq = [
  {
    q: "Is there one universally correct ideal weight?",
    a: "No. Ideal weight formulas produce estimates, not precise targets. They were originally designed for clinical drug dosing and do not account for muscle mass, bone density, ethnicity, age-related body changes, or individual health history. Use the result as a rough reference, not a goal."
  },
  {
    q: "Why do the three formulas give different results?",
    a: "Devine, Robinson, and Miller derived their formulas from different patient populations and for different clinical purposes. Each uses slightly different base weights and per-inch increments, which leads to variation — especially at taller heights."
  },
  {
    q: "Can athletes use this calculator?",
    a: "With caution. Athletes and highly muscular individuals often weigh more than these formulas suggest because muscle is denser than fat. A result that appears above the ideal range may still represent a healthy, fit body."
  },
  {
    q: "Does ideal weight change with age?",
    a: "These formulas do not adjust for age. In practice, body composition shifts with age — muscle mass tends to decrease and fat distribution changes — so the same formula result may have different implications at 25 versus 65."
  },
  {
    q: "How is ideal weight different from BMI healthy weight?",
    a: "BMI healthy weight is a range (18.5–24.9 kg/m²) derived from your height. Ideal weight formulas give a single target number per formula. Both are estimates based on population averages and neither measures body composition directly."
  }
];

const references = [
  { label: "Devine BJ (1974) — original ideal body weight formula", href: "https://pubmed.ncbi.nlm.nih.gov/4346888/" },
  { label: "Robinson JD et al. (1983) — ideal body weight formula revision", href: "https://pubmed.ncbi.nlm.nih.gov/6867490/" },
  { label: "CDC — Healthy weight, nutrition, and physical activity", href: "https://www.cdc.gov/healthy-weight/index.html" },
  { label: "NHS — Underweight adults", href: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/advice-for-underweight-adults/" }
];

export default function IdealWeightPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 via-white to-sky-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
            Free health tool
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Ideal Weight Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estimate your ideal weight range based on your height and gender using three widely
            referenced formulas. Results are for general guidance only.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <IdealWeightCalculator />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How to use this calculator</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
            <li>Select your preferred unit system (Metric or US).</li>
            <li>Choose your gender — formulas differ for male and female.</li>
            <li>Enter your height accurately. Use a stadiometer or measure against a wall for best results.</li>
            <li>Click <strong>Calculate Ideal Weight</strong>.</li>
            <li>Review the three formula results and the average. Consider the average as a general mid-range estimate.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">What is ideal weight?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Ideal weight is an estimate of the body weight range associated with good health for a
            given height and gender. Unlike BMI, which produces a single number, ideal weight formulas
            return a specific weight target. The most commonly used formulas were developed in the
            1970s by Devine, Robinson, and Miller, originally for clinical drug dosing rather than
            general health assessment.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            These formulas produce different results because they were derived from different
            populations and for different purposes. No single formula is universally correct. Body
            composition, muscle mass, bone density, age, and ethnicity all affect what is a realistic
            and healthy weight for an individual.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Formulas used</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Devine (1974)</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">Male: 50 kg + 2.3 × (height in inches − 60)</p>
              <p className="mt-1 font-mono text-sm text-slate-800">Female: 45.5 kg + 2.3 × (height in inches − 60)</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Robinson (1983)</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">Male: 52 kg + 1.9 × (height in inches − 60)</p>
              <p className="mt-1 font-mono text-sm text-slate-800">Female: 49 kg + 1.7 × (height in inches − 60)</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Miller (1983)</h3>
              <p className="mt-1 font-mono text-sm text-slate-800">Male: 56.2 kg + 1.41 × (height in inches − 60)</p>
              <p className="mt-1 font-mono text-sm text-slate-800">Female: 53.1 kg + 1.36 × (height in inches − 60)</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-mist p-5">
            <h3 className="font-black text-ink">Example calculation</h3>
            <p className="mt-2 leading-7 text-slate-700">
              A male who is 5 ft 10 in (70 inches) tall:<br />
              <span className="font-mono text-sm">Devine: 50 + 2.3 × (70 − 60) = 50 + 23 = <strong>73 kg</strong></span><br />
              <span className="font-mono text-sm">Robinson: 52 + 1.9 × 10 = <strong>71 kg</strong></span><br />
              <span className="font-mono text-sm">Miller: 56.2 + 1.41 × 10 = <strong>70 kg</strong></span><br />
              <span className="font-mono text-sm">Average: (73 + 71 + 70) / 3 ≈ <strong>71 kg</strong></span>
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>These formulas were created for clinical drug dosing, not general weight assessment.</li>
            <li>They do not account for body composition — two people at the same height and weight can have very different muscle-to-fat ratios.</li>
            <li>They are based on predominantly white Western populations and may not be appropriate for all ethnicities.</li>
            <li>They do not adjust for age — body composition naturally changes over a lifetime.</li>
            <li>Pregnant people, older adults, and individuals with certain medical conditions should not use these formulas as health targets.</li>
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
              { name: "BMR Calculator", href: "/bmr-calculator" },
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
