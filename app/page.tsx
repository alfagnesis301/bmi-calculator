import Link from "next/link";
import { BMICalculator } from "@/components/BMICalculator";
import { FAQ } from "@/components/FAQ";
import { InContentAd, ResponsiveAdSlot, SidebarAd } from "@/components/AdPlaceholder";
import { RelatedTools } from "@/components/RelatedTools";
import { createLocalizedMetadata } from "@/lib/metadata";
import { faqItems, siteConfig } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: "/",
  title: "BMI Calculator – Check Your Body Mass Index Online Free",
  description:
    "Free BMI calculator for adults. Check your body mass index instantly, see your BMI category, and compare your result with standard healthy weight ranges.",
  openGraphDescription:
    "Use this free BMI calculator to check your body mass index, BMI category, and healthy weight range instantly.",
  twitterDescription:
    "Free BMI calculator for adults. Check your BMI category and healthy weight range instantly.",
  image: "/logo.png",
});

const references = [
  { label: "CDC: Adult BMI Categories", href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
  { label: "CDC: About Body Mass Index", href: "https://www.cdc.gov/bmi/about/index.html" },
  { label: "NHS: BMI healthy weight calculator", href: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults" },
  { label: "WHO: BMI classification and overweight information", href: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" }
];

export default function HomePage() {
  const homeUrl = `${siteConfig.url}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${homeUrl}#bmi-calculator`,
      name: "BMI Calculator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url: homeUrl,
      description:
        "Free BMI calculator for adults. Check your body mass index, BMI category, and healthy weight range online.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      publisher: {
        "@id": `${homeUrl}#organization`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${homeUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${homeUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: homeUrl
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": `${homeUrl}#organization`,
      name: "BMI Checks",
      url: homeUrl,
      logo: `${siteConfig.url}/logo.png`
    },
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#website`,
      name: "BMI Checks",
      url: homeUrl,
      publisher: {
        "@id": `${homeUrl}#organization`
      }
    }
  ]};

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,#c8f5ee_0,transparent_30%),radial-gradient(circle_at_88%_8%,#ffe1d4_0,transparent_26%),linear-gradient(135deg,#f8fffd_0%,#f4f8f8_50%,#fff7f1_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_420px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
                Free BMI checker for adults
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-ink sm:text-6xl">
                BMI Calculator – Check Your Body Mass Index Online
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                Enter your height and weight to calculate your BMI instantly and see whether your
                result falls into the underweight, healthy weight, overweight, or obesity range.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#calculator"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-teal-700 px-6 py-3 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  Calculate My BMI
                </Link>
                <p className="text-sm font-bold text-slate-700">
                  Free. Instant results. No signup required.
                </p>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">2 systems</strong>
                  <span className="font-semibold text-muted">Metric &amp; US units</span>
                </div>
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">1 decimal</strong>
                  <span className="font-semibold text-muted">Precise BMI result</span>
                </div>
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">Private</strong>
                  <span className="font-semibold text-muted">Optional local save</span>
                </div>
              </div>
            </div>

            <div className="hidden rounded-3xl border border-white bg-white/75 p-5 shadow-soft backdrop-blur lg:block">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-700">
                  Adult ranges
                </p>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                  Screening only
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Underweight", "Below 18.5", "bg-sky-500"],
                  ["Healthy weight", "18.5 to 24.9", "bg-teal-500"],
                  ["Overweight", "25 - 29.9", "bg-amber-500"],
                  ["Obesity", "30 or above", "bg-rose-500"]
                ].map(([label, range, color]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-line">
                    <span className="flex items-center gap-3 font-bold text-ink">
                      <span className={`h-3 w-3 rounded-full ${color}`} aria-hidden="true" />
                      {label}
                    </span>
                    <span className="text-sm font-bold text-muted">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <BMICalculator />
          </div>

          <section className="mt-8 rounded-[2rem] border border-white bg-white p-5 shadow-soft ring-1 ring-slate-200/70 sm:p-7 lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">
              BMI healthy weight range
            </p>
            <h2 className="mt-2 text-3xl font-black text-ink">Adult BMI Categories</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              The standard adult BMI categories group results into four broad ranges. These ranges
              are commonly used as a screening tool, but they do not diagnose individual health.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Standard adult BMI categories and broad interpretation ranges
                </caption>
                <thead className="bg-mist text-ink">
                  <tr>
                    <th className="px-4 py-3 font-black">BMI range</th>
                    <th className="px-4 py-3 font-black">Category</th>
                    <th className="px-4 py-3 font-black">What it usually means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Below 18.5</td>
                    <td className="px-4 py-3">Underweight</td>
                    <td className="px-4 py-3">
                      Your weight may be below the standard healthy range for your height.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">18.5 to 24.9</td>
                    <td className="px-4 py-3">Healthy weight</td>
                    <td className="px-4 py-3">
                      Your weight is within the standard healthy range for your height.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">25 to 29.9</td>
                    <td className="px-4 py-3">Overweight</td>
                    <td className="px-4 py-3">
                      Your weight is above the standard healthy range for your height.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">30 or above</td>
                    <td className="px-4 py-3">Obesity</td>
                    <td className="px-4 py-3">
                      Your weight is in the obesity range based on standard BMI categories.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="3333333333" className="min-h-28" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article id="learn" className="space-y-10">
          <section className="rounded-3xl border border-teal-200 bg-white p-6 shadow-line sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">
              Adult BMI guidance
            </p>
            <h2 className="mt-2 text-3xl font-black text-ink">
              What is a healthy BMI range?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              For most adults, a BMI between 18.5 and 24.9 is commonly considered the healthy
              weight range. A BMI below 18.5 is usually classified as underweight, 25 to 29.9 as
              overweight, and 30 or above as obesity. These adult BMI categories are screening
              ranges used by public health organizations; they are not a personal diagnosis.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              BMI does not account for muscle mass, body composition, age, ethnicity, pregnancy, or
              individual medical conditions. Use your result as a starting point, then add context
              from waist circumference, health history, and professional guidance when needed.
            </p>
            <Link
              href="/healthy-bmi-range"
              className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Learn more about healthy BMI range
            </Link>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
              <Link className="text-teal-700 underline-offset-4 hover:underline" href="/bmi-categories">
                See BMI categories
              </Link>
              <Link className="text-teal-700 underline-offset-4 hover:underline" href="/bmi-chart">
                View BMI chart
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">What is BMI?</h2>
            <p className="mt-4 leading-8 text-slate-700">
              BMI, or Body Mass Index, is a simple calculation that compares weight with height. It
              is commonly used as a screening tool to group adults into broad weight categories:
              underweight, healthy weight, overweight, or obesity. Those categories can be useful
              for public health research and for a first conversation about weight-related risk, but
              BMI is not a full picture of health.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This calculator is designed to make the number easier to understand. It shows your BMI
              to one decimal place, the adult category, the standard healthy BMI range, and an
              approximate healthy weight range for the height you entered. Treat the result as a
              starting point, not a diagnosis. A clinician may consider waist measurement, blood
              pressure, cholesterol, blood sugar, medical history, family history, fitness, sleep,
              medicines, and other factors before making personal recommendations.
            </p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">How to calculate BMI</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-mist p-5">
                  <h3 className="font-black text-ink">Metric Units</h3>
                  <p className="mt-2 font-mono text-sm text-slate-800">
                    BMI = weight (kg) / height (m)^2
                  </p>
                </div>
                <div className="rounded-2xl bg-mist p-5">
                  <h3 className="font-black text-ink">US Units</h3>
                  <p className="mt-2 font-mono text-sm text-slate-800">
                    BMI = 703 * weightLb / (heightIn * heightIn)
                  </p>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                The formulas produce the same type of score. The only difference is the conversion
                factor needed when using pounds and inches instead of kilograms and meters.
              </p>
              <Link
                href="/how-to-find-your-bmi-score"
                className="mt-4 inline-flex text-sm font-black text-teal-700 underline-offset-4 hover:underline"
              >
                How to find your BMI score step by step
              </Link>
              <Link
                href="/bmi-formula"
                className="mt-3 inline-flex text-sm font-black text-teal-700 underline-offset-4 hover:underline"
              >
                Learn the BMI formula
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">BMI category quick reference</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">BMI classification table for adults</caption>
                  <thead>
                    <tr className="border-b border-slate-200 text-ink">
                      <th className="py-3 pr-4 font-black">Category</th>
                      <th className="py-3 font-black">BMI range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Underweight</td>
                      <td className="py-3">Below 18.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Healthy weight</td>
                      <td className="py-3">18.5 to 24.9</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Overweight</td>
                      <td className="py-3">25 to 29.9</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Obesity</td>
                      <td className="py-3">30 or above</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                Adult categories are screening ranges. They are intentionally broad, which is why the
                same BMI can mean different things for two people with different bodies and health
                histories.
              </p>
              <Link
                href="/bmi-categories"
                className="mt-4 inline-flex text-sm font-black text-teal-700 underline-offset-4 hover:underline"
              >
                Read the full BMI categories guide
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">How to interpret your BMI</h2>
            <p className="mt-4 leading-8 text-slate-700">
              A BMI below 18.5 is usually classified as underweight for adults. A BMI from 18.5 to
              24.9 is commonly called normal weight. A BMI from 25 to 29.9 falls in the overweight
              range, and a BMI of 30 or higher falls in the obesity range. These labels are not meant
              to judge a person. They are a shorthand used to flag when weight may deserve a closer
              look alongside other health information.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The healthy weight estimate shown by the calculator is based on the same adult BMI
              range of 18.5 to 24.9. It answers a practical question: for the height entered, what
              body weight would land inside that range? It is approximate because healthy weight is
              not a single target. Body composition, medical conditions, pregnancy, disability,
              training status, and personal history can all change what is realistic or appropriate.
            </p>
          </section>

          <InContentAd />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">When BMI may be less accurate</h2>
            <p className="mt-4 leading-8 text-slate-700">
              BMI does not measure body fat directly. It also does not show where fat is carried on
              the body, which can matter for health risk. Because the calculation uses total weight,
              it cannot distinguish fat from muscle, bone, water, or organ mass. A strength athlete
              may have a high BMI because of muscle. An older adult may have a BMI in the normal
              range while still having low muscle mass. Two people with the same BMI may have
              different waist measurements, fitness levels, and lab results.
            </p>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {[
                "Athletes or people with high muscle mass",
                "Older adults",
                "Pregnancy",
                "Children and teenagers",
                "Some ethnic groups",
                "People with specific medical conditions"
              ].map((item) => (
                <li key={item} className="rounded-xl bg-mist px-4 py-3">{item}</li>
              ))}
            </ul>
            <p className="mt-5 leading-8 text-slate-700">
              BMI is useful, but it has limits. Learn more about the{" "}
              <Link href="/blog/bmi-limitations" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                limitations of BMI
              </Link>
              .
            </p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">BMI calculator vs BMI chart</h2>
              <p className="mt-4 leading-8 text-slate-700">
                A BMI calculator is faster than reading a chart because it applies the formula for
                your exact height and weight and reduces manual lookup errors. A BMI chart is still
                helpful for seeing where the category cutoffs sit and for comparing ranges at a
                glance.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">How to use your BMI result</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Use BMI as a starting point, not a diagnosis. Combine it with waist circumference,
                health history, and professional guidance where needed.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Waist circumference can provide additional context beyond BMI. Read more about{" "}
                <Link href="/blog/waist-circumference-health" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                  waist circumference and health
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Next tools after checking BMI</h2>
            <p className="mt-4 leading-8 text-slate-700">
              After checking your BMI, you can estimate your daily calorie needs with the{" "}
              <Link href="/calorie-calculator" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                Calorie Calculator
              </Link>
              . Use any result as general information, then speak with a qualified healthcare
              professional before making medical decisions.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">BMI and health risks</h2>
            <p className="mt-4 leading-8 text-slate-700">
              BMI outside the usual healthy range can be associated with health concerns, but it does
              not tell the whole story. Higher BMI may be linked with a greater chance of issues such
              as high blood pressure, abnormal cholesterol, sleep apnea, type 2 diabetes, or joint
              strain. Lower BMI may be linked with nutritional concerns, reduced reserves during
              illness, or other medical issues. The important word is &quot;may.&quot; BMI can point toward a
              conversation, but personal risk depends on more than a calculator result.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Speak with a qualified healthcare provider if your BMI changes quickly without a clear
              reason, if you have symptoms, if you are managing a health condition, or if you want a
              plan that fits your body and circumstances. A professional can interpret BMI together
              with measurements and history that an online tool cannot collect.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Tips for maintaining a healthy weight</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Sustainable habits are usually more useful than short bursts of restriction. Many
              people benefit from regular meals built around filling foods, enough protein, fruits,
              vegetables, whole grains, and fluids. Movement also matters, including daily walking,
              resistance training, sports, active commuting, or any activity that fits your life.
              Sleep, stress, medication side effects, work schedules, food access, and mental health
              can all affect weight. A supportive plan should make room for those realities.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If your goal is weight change, consider tracking trends rather than reacting to one
              weigh-in. Small, steady adjustments are often easier to maintain. Avoid using BMI as a
              reason for shame or extreme dieting. The best next step is the one that improves health
              while still being realistic to repeat.
            </p>
          </section>

          <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-ink">Health disclaimer</h2>
            <p className="mt-4 leading-8 text-slate-800">
              This calculator is for general informational purposes only and does not replace
              professional medical advice. Always consult a qualified healthcare provider for
              personal health concerns.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Adult BMI vs child BMI</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Adult BMI categories use fixed cutoffs. Child and teen BMI is different because bodies
              change as children grow. Pediatric BMI is interpreted by percentile for age and sex,
              usually with a growth chart. If you are checking BMI for someone under 20, use a
              dedicated child and teen BMI tool or ask a pediatric healthcare professional.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">References</h2>
            <p className="mt-4 leading-8 text-slate-700">
              The educational material on this page is written originally and aligned with widely
              used public health guidance. These external resources can help you read more from
              public health organizations:
            </p>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-teal-800">
              {references.map((reference) => (
                <li key={reference.href}>
                  <a className="underline-offset-4 hover:underline" href={reference.href} rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div id="faq">
            <FAQ />
          </div>

          <RelatedTools />
        </article>

        <SidebarAd />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="4444444444" className="min-h-28" />
      </div>
    </main>
  );
}
