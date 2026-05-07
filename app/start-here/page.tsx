import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use BMI Checks Responsibly",
  description:
    "A practical orientation to BMI Checks: which calculator to use first, how BMI relates to BMR, calorie and body-fat tools, what these numbers can and cannot tell you, and when to consult a qualified healthcare provider.",
  alternates: {
    canonical: "/start-here"
  }
};

export default function StartHerePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bmichecks.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Start here",
        item: "https://bmichecks.com/start-here"
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            Orientation
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl">
            How to Use BMI Checks Responsibly
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            BMI Checks is a free set of body-composition and energy tools. The numbers they
            produce are useful, but only when you understand what each one measures and where
            it stops being meaningful. This page is a short guide to using the calculators
            without over-interpreting them.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Reviewed 5 May 2026 · Author: Ricardo Diaz
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Which calculator should I use first?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            For most people, the BMI calculator on the home page is the right starting point.
            It is the cheapest and most studied population-level screening number, and it gives
            you a frame of reference before you look at anything else. Calculate it once with
            accurate measurements (morning, no shoes, height against a wall), then read the
            BMI guide to understand what your category does and does not mean.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            From there, the right next step depends on what you want to know. Use the rough map
            below as a guide rather than a prescription.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How the calculators relate</h2>
          <ul className="mt-5 space-y-5 leading-8 text-slate-700">
            <li>
              <strong className="text-ink">BMI</strong> compares weight with height. It is a
              quick screening number that says whether your body weight, relative to your
              height, sits in a range commonly associated with higher health risk.
            </li>
            <li>
              <strong className="text-ink">BMR (basal metabolic rate)</strong> estimates how
              many calories your body uses at rest. It is the foundation of any calorie target,
              because it tells you what you burn just to keep your organs running.
            </li>
            <li>
              <strong className="text-ink">Calorie calculator</strong> takes BMR and adds an
              activity multiplier to estimate your daily energy needs. Useful if you want to
              maintain, gain or lose weight in a planned way.
            </li>
            <li>
              <strong className="text-ink">Ideal weight calculator</strong> applies traditional
              formulas (Devine, Robinson, Miller, Hamwi) to suggest a target range for your
              height. These are starting points, not personalised goals.
            </li>
            <li>
              <strong className="text-ink">Body fat calculator</strong> uses simple
              circumference measurements (US Navy method) to estimate the percentage of your
              body that is fat tissue. This often paints a different picture from BMI alone,
              especially for people with a lot of muscle mass.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">What these numbers can and cannot tell you</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Online calculators are simple equations. They take a few inputs, apply a published
            formula, and return a number. That number can usefully orient you — but it cannot
            measure your blood pressure, scan your liver, see your cholesterol, or know how you
            sleep, eat, train, or feel.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Treat any result on this site as a screening signal: a reason to learn more, talk to
            a clinician, or check another complementary measurement (such as waist
            circumference). It is not a diagnosis, a fitness rating or a verdict on your health.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to interpret your results safely</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Look at trends over weeks and months, not single readings.</li>
            <li>Check more than one number — for example BMI together with waist circumference.</li>
            <li>Remember context: age, biological sex, ethnicity, training history, illness.</li>
            <li>Be honest about input quality (an inaccurate weight produces an inaccurate result).</li>
            <li>If a number worries you, write it down and bring it to a healthcare appointment.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">When to consult a qualified healthcare provider</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Speak to a clinician if your weight has changed unexpectedly, if your BMI sits well
            outside the healthy adult range, if your waist measurement is at or above the
            high-risk thresholds, if you have symptoms (fatigue, breathlessness, pain, mood
            changes), if you are pregnant or trying to become pregnant, if you are managing a
            long-term condition, or if a calculator on this site has left you anxious. A
            qualified professional can place these numbers in the context of your actual health.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-mist p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Calculators on this site</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/">
              BMI calculator
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/bmr-calculator">
              BMR calculator
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/calorie-calculator">
              Calorie calculator
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/ideal-weight-calculator">
              Ideal weight calculator
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/body-fat-calculator">
              Body fat calculator
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/health-calculators">
              All calculators &amp; hub
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-mist p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Main guides</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/bmi-guide">
              Complete BMI guide
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/healthy-bmi-range">
              Healthy BMI range
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/how-to-find-your-bmi-score">
              How to find your BMI score
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/blog">
              Blog
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            BMI Checks publishes general health information and screening calculators. It is not
            a substitute for professional medical advice, diagnosis or treatment. Always seek
            the advice of a qualified healthcare provider with any questions about a medical
            condition.
          </p>
        </section>
      </article>
    </main>
  );
}
