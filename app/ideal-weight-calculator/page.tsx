import type { Metadata } from "next";
import { IdealWeightCalculator } from "./IdealWeightCalculator";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator – Find Your Healthy Weight Range",
  description: "Use this free ideal weight calculator to estimate your healthy weight range by height and gender using the Devine, Robinson, and Miller formulas.",
  alternates: { canonical: "/ideal-weight-calculator" }
};

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
