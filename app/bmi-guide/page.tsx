import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Complete BMI Guide: Formula, Chart, Categories and Limitations",
  description:
    "An evidence-based BMI guide for adults: metric and US formulas, worked examples, the WHO category chart, how to interpret your score, the limitations of BMI, and when to speak to a clinician.",
  alternates: {
    canonical: "/bmi-guide"
  }
};

const adultCategories = [
  { range: "Below 18.5", label: "Underweight" },
  { range: "18.5 to 24.9", label: "Healthy weight" },
  { range: "25.0 to 29.9", label: "Overweight" },
  { range: "30.0 to 34.9", label: "Obesity class I" },
  { range: "35.0 to 39.9", label: "Obesity class II" },
  { range: "40.0 or higher", label: "Obesity class III" }
];

const faqs = [
  {
    q: "Is BMI a medical diagnosis?",
    a: "No. BMI is a screening tool that compares weight with height. It cannot diagnose obesity, undernutrition, or any other condition on its own. A clinician interprets BMI alongside waist circumference, blood pressure, blood lipids, blood glucose, fitness level, lifestyle, family history and other findings before reaching a conclusion."
  },
  {
    q: "What is the healthy BMI range for adults?",
    a: "The World Health Organization defines a healthy BMI for most adults as 18.5 to 24.9. This range is associated, at the population level, with the lowest risk of weight-related conditions. It does not guarantee individual health and the cut-points are slightly different for some populations, including South Asian adults."
  },
  {
    q: "Does BMI work for athletes?",
    a: "Often poorly. Muscle is denser than fat, so a strength-trained athlete with low body fat may register a BMI in the overweight or obese range. For people with very high muscle mass, body fat percentage, waist circumference and waist-to-height ratio give a more accurate picture than BMI alone."
  },
  {
    q: "Can I use this BMI guide for children?",
    a: "No. The adult BMI categories on this page are for people aged 18 and over. Children and teenagers are still growing, so clinicians use BMI-for-age percentiles from the WHO, the CDC or the UK NHS rather than fixed categories."
  },
  {
    q: "Should I worry if my BMI is just outside the healthy range?",
    a: "A BMI of 25 or 26 is not the same as a BMI of 35. Risk increases gradually, not at a single threshold. If your BMI is slightly outside the healthy range, look at the bigger picture — waist size, activity level, blood pressure, sleep, diet quality — and talk to a healthcare professional if you are unsure."
  }
];

export default function BMIGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Complete BMI Guide: Formula, Chart, Categories and Limitations",
    description: metadata.description,
    author: {
      "@type": "Person",
      name: "Ricardo Diaz",
      url: "https://bmichecks.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "BMI Checks",
      url: "https://bmichecks.com"
    },
    datePublished: "2026-01-15",
    dateModified: "2026-05-05",
    mainEntityOfPage: "https://bmichecks.com/bmi-guide"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bmichecks.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "BMI Guide",
        item: "https://bmichecks.com/bmi-guide"
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[linear-gradient(135deg,#f8fffd_0%,#f4f8f8_55%,#fff7f1_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
            Comprehensive guide
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Complete BMI Guide: Formula, Chart, Categories and Limitations
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            BMI — body mass index — is one of the most widely used screening numbers in health,
            and one of the most misunderstood. This guide explains how the formula works, what
            the categories mean, and where BMI breaks down so you can interpret your own score
            in context rather than as a verdict.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Reviewed 5 May 2026 · Author: Ricardo Diaz
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">What is BMI?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Body mass index, or BMI, is a single number derived from a person&apos;s weight and
            height. It was proposed in the 1830s by Belgian statistician Adolphe Quetelet as a
            way to describe the typical body proportions of a population. In the 1970s,
            researcher Ancel Keys popularised the modern name &quot;body mass index&quot;, and the
            World Health Organization later adopted it as a low-cost screening tool for
            underweight, overweight and obesity in adults.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            BMI was never designed to be a diagnosis. Its purpose is to flag, at the population
            level, whether weight relative to height is in a range associated with higher health
            risk. For an individual it is a starting point — useful when combined with other
            measurements, and misleading when read on its own.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">The metric BMI formula</h2>
          <p className="mt-4 leading-8 text-slate-700">
            In metric units the formula is:
          </p>
          <p className="mt-4 rounded-xl bg-mist px-4 py-3 font-mono text-sm text-slate-800">
            BMI = weight (kg) ÷ height (m)<sup>2</sup>
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Worked example. An adult who weighs 72 kg and is 1.70 m tall:
            72 ÷ (1.70 × 1.70) = 72 ÷ 2.89 ≈ 24.9. That sits at the very top of the healthy
            adult range.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">The US BMI formula</h2>
          <p className="mt-4 leading-8 text-slate-700">
            In US customary units (pounds and inches) the formula uses the conversion factor
            703 so the score lands on the same scale as the metric version:
          </p>
          <p className="mt-4 rounded-xl bg-mist px-4 py-3 font-mono text-sm text-slate-800">
            BMI = (weight in lb × 703) ÷ height (in)<sup>2</sup>
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Worked example. A person who weighs 165 lb and is 69 in tall:
            (165 × 703) ÷ (69 × 69) = 115 995 ÷ 4 761 ≈ 24.4. The small difference from the
            metric example above is just rounding when converting between unit systems.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Adult BMI categories (WHO)</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Adult BMI categories defined by the World Health Organization</caption>
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">BMI range</th>
                  <th className="py-3 font-black">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {adultCategories.map((row) => (
                  <tr key={row.range}>
                    <td className="py-3 pr-4 font-semibold">{row.range}</td>
                    <td className="py-3">{row.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-8 text-slate-700">
            These categories apply to adults aged 18 and over. They are not appropriate for
            children or pregnant people, and the cut-offs may be lower for some populations.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">How to interpret your BMI</h2>
          <p className="mt-4 leading-8 text-slate-700">
            A BMI in the healthy range is a positive sign but not a stamp of perfect health.
            Two adults with the same BMI can have very different body composition, fitness,
            blood pressure and metabolic markers. A sedentary smoker with a BMI of 22 can be
            at higher cardiovascular risk than an active non-smoker with a BMI of 27.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Treat BMI as a flag, not a verdict. If yours is outside the healthy range,
            especially with other risk factors such as a high waist circumference or family
            history of type 2 diabetes, that is a reason to look more closely — usually with a
            healthcare provider — not a reason to panic.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Limitations of BMI</h2>
          <p className="mt-4 leading-8 text-slate-700">
            BMI uses only weight and height. It cannot tell what proportion of body weight is
            muscle, bone, water or fat, and it does not say where fat is stored. Because
            visceral fat (around the organs) is more strongly linked with cardiometabolic risk
            than fat stored under the skin, BMI alone misses an important part of the picture.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>It can overstate body fat in muscular athletes.</li>
            <li>It can understate body fat in older adults who have lost muscle mass.</li>
            <li>It does not capture fat distribution, which affects health risk.</li>
            <li>The cut-offs were derived mostly from European-ancestry populations.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI and muscle mass</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Muscle is denser than fat, so people who train regularly with weights — particularly
            rugby players, sprinters, weightlifters and bodybuilders — often have a BMI in the
            overweight or obese range while carrying a low body fat percentage. In this case the
            number reflects the formula, not health risk. Body fat percentage measured with
            calipers, DEXA or bioimpedance, plus waist circumference, gives a clearer picture.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI and age</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Older adults tend to lose muscle and gain fat, even when total body weight stays
            stable. As a result, a BMI of 24 in a 30-year-old and a BMI of 24 in an 80-year-old
            do not describe the same body. In adults over 65, slightly higher BMI ranges (often
            cited as 23–28) are sometimes associated with the lowest mortality, although this is
            still debated. Always interpret BMI with age in mind.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI and biological sex</h2>
          <p className="mt-4 leading-8 text-slate-700">
            On average, women carry a higher proportion of body fat than men at the same BMI,
            because the formula does not distinguish lean from fat tissue. WHO categories
            nevertheless apply equally to adult men and women — the difference shows up in
            complementary measurements such as body fat percentage and waist circumference,
            which use sex-specific thresholds.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">BMI and ethnicity</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Health risk linked to body fat does not start at the same BMI in every population.
            Several health authorities, including the UK NICE guidelines and the WHO Asia-Pacific
            consultation, recommend lower thresholds for adults of South Asian, Chinese or other
            Asian backgrounds. In these groups, increased risk often appears from a BMI of around
            23, and obesity-level risk from around 27.5, rather than 25 and 30.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Waist circumference and waist-to-height ratio</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Where fat is stored matters. Fat around the abdomen is more strongly linked with
            cardiometabolic risk than fat on the hips or thighs. Two simple complements to BMI
            help capture this:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>
              <strong>Waist circumference.</strong> Measured at the midpoint between the lowest
              rib and the iliac crest, after a normal exhale. Higher risk thresholds are
              commonly cited as &gt;94 cm (≈37 in) for men and &gt;80 cm (≈31.5 in) for women,
              with substantially raised risk above 102 cm (40 in) and 88 cm (34.5 in)
              respectively.
            </li>
            <li>
              <strong>Waist-to-height ratio.</strong> Waist measurement divided by height in the
              same unit. A ratio above 0.5 (&quot;keep your waist under half your height&quot;) is the
              widely used cut-off for raised risk in adults.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">When to speak to a healthcare professional</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Consider booking an appointment if your BMI is below 18.5 or 25 or above and you
            have other risk factors, if your weight has changed quickly without explanation, or
            if BMI is causing you anxiety. A clinician can interpret your number alongside the
            measurements and history that BMI cannot capture, and help build a plan that fits
            your life rather than a generic chart.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Frequently asked questions</h2>
          <dl className="mt-5 space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-lg font-black text-ink">{f.q}</dt>
                <dd className="mt-2 leading-8 text-slate-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
          <p className="mt-4 leading-8 text-slate-800">
            This guide is for general information only and does not replace personalised medical
            advice, diagnosis or treatment. BMI Checks does not employ medical reviewers. Always
            speak to a qualified healthcare professional about questions specific to your own
            health.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">References</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>
              World Health Organization. <em>Obesity and overweight</em>.{" "}
              <a className="text-teal-700 underline" href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" rel="nofollow noopener" target="_blank">
                who.int
              </a>
            </li>
            <li>
              Centers for Disease Control and Prevention. <em>About Adult BMI</em>.{" "}
              <a className="text-teal-700 underline" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" rel="nofollow noopener" target="_blank">
                cdc.gov
              </a>
            </li>
            <li>
              UK National Health Service. <em>What is the body mass index (BMI)?</em>{" "}
              <a className="text-teal-700 underline" href="https://www.nhs.uk/common-health-questions/lifestyle/what-is-the-body-mass-index-bmi/" rel="nofollow noopener" target="_blank">
                nhs.uk
              </a>
            </li>
            <li>
              WHO Expert Consultation. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies</em>. The Lancet, 2004.
            </li>
            <li>
              National Institute for Health and Care Excellence (NICE). <em>BMI: preventing ill health and premature death in black, Asian and other minority ethnic groups</em>.{" "}
              <a className="text-teal-700 underline" href="https://www.nice.org.uk/guidance/ph46" rel="nofollow noopener" target="_blank">
                nice.org.uk
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-mist p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Keep exploring</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/">
              Calculate your BMI
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/start-here">
              How to use BMI Checks responsibly
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/health-calculators">
              All health calculators
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50" href="/blog">
              Blog &amp; in-depth guides
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
