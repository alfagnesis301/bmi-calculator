import type { Metadata } from "next";
import { CalorieCalculator } from "./CalorieCalculator";

export const metadata: Metadata = {
  title: "Calorie Calculator – Daily Calorie Needs",
  description: "Calculate your daily calorie needs for weight maintenance, loss, or gain based on age, gender, height, weight, and activity level.",
  alternates: { canonical: "/calorie-calculator" }
};

export default function CaloriePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-amber-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-700">
            Free health tool
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calorie Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estimate your daily calorie needs for weight maintenance, loss, or gain based on your
            personal measurements and activity level.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <CalorieCalculator />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How daily calorie needs are calculated</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Your daily calorie need is estimated by multiplying your Basal Metabolic Rate (BMR) by
            an activity factor. BMR is calculated using the Mifflin-St Jeor equation, which is widely
            considered the most accurate formula for most adults.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            The result is your Total Daily Energy Expenditure (TDEE) — the approximate number of
            calories you burn each day. To lose weight gradually, most guidelines suggest reducing
            intake by 300–500 kcal below TDEE. To gain weight, increasing by a similar amount is
            a common starting point.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            These are estimates. Individual metabolism varies, and factors such as sleep, stress,
            hormonal health, and medical conditions can all affect actual energy needs.
          </p>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Health disclaimer</h2>
          <p className="mt-3 leading-8 text-slate-800">
            This calculator is for general informational purposes only and does not replace
            professional medical advice. Always consult a qualified healthcare provider before
            making significant changes to your diet or calorie intake.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Related tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "BMI Calculator", href: "/" },
              { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
              { name: "BMR Calculator", href: "/bmr-calculator" },
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
