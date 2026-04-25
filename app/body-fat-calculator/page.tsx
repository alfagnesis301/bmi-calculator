import type { Metadata } from "next";
import { BodyFatCalculator } from "./BodyFatCalculator";

export const metadata: Metadata = {
  title: "Body Fat Calculator – Estimate Body Fat Percentage",
  description: "Estimate your body fat percentage using the US Navy method. Enter waist, neck, and height measurements for a quick body fat estimate.",
  alternates: { canonical: "/body-fat-calculator" }
};

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
          <h2 className="text-2xl font-black text-ink">US Navy body fat method</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The US Navy circumference method estimates body fat percentage using body measurements
            rather than weight and height alone. It was developed as a practical, low-cost screening
            tool and is widely used when more precise methods like DEXA scans are unavailable.
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Men</h3>
              <p className="mt-1 font-mono text-sm text-slate-800 leading-7">
                % fat = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450
              </p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-black text-ink">Women</h3>
              <p className="mt-1 font-mono text-sm text-slate-800 leading-7">
                % fat = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.22100 × log₁₀(height)) − 450
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
