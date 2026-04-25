import type { Metadata } from "next";
import { BMRCalculator } from "./BMRCalculator";

export const metadata: Metadata = {
  title: "BMR Calculator – Basal Metabolic Rate Calculator",
  description: "Calculate your Basal Metabolic Rate (BMR) and daily calorie needs using the Mifflin-St Jeor equation. Free online BMR calculator.",
  alternates: { canonical: "/bmr-calculator" }
};

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
          <h2 className="text-2xl font-black text-ink">What is BMR?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic
            physiological functions — breathing, circulation, cell production, and temperature
            regulation — while completely at rest. It represents the minimum energy required to keep
            you alive over 24 hours.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            BMR accounts for roughly 60–75% of total daily energy expenditure for most people. The
            remaining calories are used during physical activity and digesting food (the thermic effect
            of food). Knowing your BMR helps you estimate how many calories you need each day to
            maintain, lose, or gain weight.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Mifflin-St Jeor equation</h2>
          <p className="mt-4 leading-8 text-slate-700">
            This calculator uses the Mifflin-St Jeor equation, which is considered the most accurate
            BMR formula for most adults by major health organisations.
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
