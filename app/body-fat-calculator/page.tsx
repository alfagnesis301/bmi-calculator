import type { Metadata } from "next";
import { BodyFatCalculator } from "./BodyFatCalculator";

export const metadata: Metadata = {
  title: "Body Fat Calculator – Estimate Body Fat Percentage",
  description: "Estimate your body fat percentage using the US Navy method. Enter waist, neck, and height measurements for a quick body fat estimate.",
  alternates: { canonical: "/body-fat-calculator" }
};

const faq = [
  {
    q: "How accurate is the US Navy body fat method?",
    a: "The US Navy circumference method has a reported error of approximately ±3–4% body fat compared to DEXA scans. Accuracy depends heavily on correct measurement technique — measuring at the wrong location or with clothing on can introduce significant error."
  },
  {
    q: "Where exactly should I measure my waist?",
    a: "For men, measure the waist at the level of the navel. For women, measure at the narrowest point of the abdomen, usually just above the navel. Use a flexible tape measure, keep it horizontal, and measure after a normal exhale — do not suck in."
  },
  {
    q: "Where should I measure my neck?",
    a: "Measure the neck just below the larynx (Adam's apple), keeping the tape perpendicular to the spine. The neck measurement should be taken with the head in a neutral position, not tilted."
  },
  {
    q: "Why is the hip measurement only needed for women?",
    a: "The US Navy formula for women includes hip circumference because women typically carry more fat in the hip region. The male formula uses only waist and neck because fat distribution patterns differ significantly between sexes."
  },
  {
    q: "Is body fat percentage more useful than BMI?",
    a: "For assessing body composition, yes — body fat percentage tells you directly how much of your weight is fat tissue. BMI cannot distinguish fat from muscle. However, body fat measurements from circumference methods are still estimates and are less precise than clinical methods like DEXA."
  },
  {
    q: "What is a healthy body fat percentage?",
    a: "According to the American Council on Exercise (ACE), fitness-range body fat is roughly 14–17% for men and 21–24% for women. Essential fat — the minimum needed for basic health — is about 2–5% for men and 10–13% for women. These are general ranges, not clinical targets."
  }
];

const references = [
  { label: "Hodgdon JA & Beckett MB (1984) — US Navy body fat formula development", href: "https://apps.dtic.mil/sti/citations/ADA144692" },
  { label: "American Council on Exercise (ACE) — body fat percentage categories", href: "https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/" },
  { label: "NIH — Body composition and health", href: "https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" },
  { label: "CDC — Assessing your weight", href: "https://www.cdc.gov/healthy-weight/assessing/index.html" }
];

export default function BodyFatPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-rose-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-rose-700">
            Free health tool
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Body Fat Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estimate your body fat percentage using the US Navy circumference method. You only need
            a tape measure — no specialist equipment required.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <BodyFatCalculator />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How to use this calculator</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
            <li>Select your gender — the formula and required measurements differ for men and women.</li>
            <li>Measure your <strong>height</strong> standing straight, barefoot.</li>
            <li>Measure your <strong>waist</strong> at the navel (men) or narrowest point (women), after a normal exhale.</li>
            <li>Measure your <strong>neck</strong> just below the Adam&apos;s apple, keeping the tape horizontal.</li>
            <li>If female, measure your <strong>hip</strong> at the widest point.</li>
            <li>Enter all values in cm and click <strong>Calculate Body Fat</strong>.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">US Navy body fat method</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The US Navy circumference method estimates body fat percentage using body measurements
            rather than weight and height alone. It was developed as a practical, low-cost screening
            tool and is widely used when more precise methods like DEXA scans are unavailable.
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Men</h3>
              <p className="mt-1 font-mono text-sm leading-7 text-slate-800">
                % fat = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450
              </p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Women</h3>
              <p className="mt-1 font-mono text-sm leading-7 text-slate-800">
                % fat = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.22100 × log₁₀(height)) − 450
              </p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Example (male, height 180 cm, waist 85 cm, neck 38 cm)</h3>
              <p className="mt-2 font-mono text-sm leading-7 text-slate-800">
                log₁₀(85−38) = log₁₀(47) ≈ 1.672<br />
                log₁₀(180) ≈ 2.255<br />
                495 / (1.0324 − 0.19077×1.672 + 0.15456×2.255) − 450 ≈ <strong>16.8%</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Body fat categories</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Body fat percentage categories for adults</caption>
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">Category</th>
                  <th className="py-3 pr-4 font-black">Men</th>
                  <th className="py-3 font-black">Women</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr><td className="py-3 pr-4 font-semibold">Essential fat</td><td className="py-3 pr-4">2–5%</td><td className="py-3">10–13%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Athletes</td><td className="py-3 pr-4">6–13%</td><td className="py-3">14–20%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Fitness</td><td className="py-3 pr-4">14–17%</td><td className="py-3">21–24%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Average</td><td className="py-3 pr-4">18–24%</td><td className="py-3">25–31%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Obese</td><td className="py-3 pr-4">25%+</td><td className="py-3">32%+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">Source: American Council on Exercise (ACE)</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Accuracy is approximately ±3–4% compared to DEXA — much less precise than clinical body composition methods.</li>
            <li>Measurement error compounds quickly. An error of 1–2 cm in the waist or neck can shift the result by 1–2%.</li>
            <li>The formula was developed on a specific military population and may be less accurate for other demographic groups.</li>
            <li>It does not account for the distribution of fat between subcutaneous (under skin) and visceral (around organs) — visceral fat carries higher health risk.</li>
            <li>Results should not be used for medical or fitness decisions without professional assessment.</li>
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
              { name: "BMR Calculator", href: "/bmr-calculator" },
              { name: "Calorie Calculator", href: "/calorie-calculator" }
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
