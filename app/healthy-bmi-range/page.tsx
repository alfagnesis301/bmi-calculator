import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveAdSlot } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Healthy BMI Range for Adults - 18.5 to 24.9 Explained",
  description:
    "Learn what the healthy BMI range of 18.5 to 24.9 means for adults, how BMI categories are used, and when BMI needs extra context.",
  alternates: {
    canonical: "/healthy-bmi-range"
  }
};

const categories = [
  ["Underweight", "Below 18.5"],
  ["Healthy BMI range", "18.5 to 24.9"],
  ["Overweight", "25 to 29.9"],
  ["Obesity", "30 or higher"]
];

export default function HealthyBMIRangePage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            Adult BMI guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            Healthy BMI Range for Adults: 18.5 to 24.9 Explained
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            For most adults, a BMI between 18.5 and 24.9 is commonly described as the healthy BMI
            range. This guide explains what that range means, how the categories are used, and why
            BMI should always be interpreted with context.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="5555555555" className="min-h-28" />
      </div>

      <article className="mx-auto max-w-5xl space-y-8 px-4 pb-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">What is a healthy BMI range?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            The healthy BMI range for most adults is 18.5 to 24.9. BMI, or body mass index, compares
            weight with height to estimate whether a person falls into a broad adult weight category.
            It is used because it is quick to calculate and works well for population-level screening.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            A result inside the healthy BMI range does not guarantee perfect health, and a result
            outside the range does not diagnose a medical condition. It is best understood as a
            starting point for interpreting weight in relation to height.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Adult BMI categories</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Adult BMI category table</caption>
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">Category</th>
                  <th className="py-3 font-black">BMI range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categories.map(([label, range]) => (
                  <tr key={label}>
                    <td className="py-3 pr-4 font-semibold">{label}</td>
                    <td className="py-3">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Is 18.5 to 24.9 healthy for everyone?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Not always. BMI does not measure body fat directly, and it cannot tell how much weight
            comes from muscle, bone, fluid, or fat. Athletes, older adults, pregnant people, and
            people with certain health conditions may need other assessments alongside BMI.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Children and teenagers also need a different interpretation because BMI is compared with
            age- and sex-specific growth charts. Adult BMI cutoffs should not be used as the only
            guide for children.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to use your BMI result</h2>
          <p className="mt-4 leading-8 text-slate-700">
            If your BMI is within 18.5 to 24.9, it is generally within the adult healthy-weight
            category. If it is below or above that range, the next step is not panic or
            self-diagnosis. Instead, consider your broader health picture: waist size, activity
            level, diet quality, sleep, blood pressure, cholesterol, blood sugar, medical history,
            and recent weight changes.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            A healthcare professional can help interpret BMI with those extra factors. This is
            especially important if your weight changed unexpectedly, if you are pregnant, if you
            are managing a health condition, or if you are planning a major diet or exercise change.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Calculate your BMI
          </Link>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            This calculator is for general informational purposes only and does not replace
            professional medical advice. Always consult a qualified healthcare provider for personal
            health concerns.
          </p>
        </section>
      </article>
    </main>
  );
}
