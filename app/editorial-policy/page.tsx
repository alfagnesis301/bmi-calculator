import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy & Medical Disclaimer | BMI Checks",
  description: "How BMI Checks creates, reviews, and updates health content. Our sources, editorial standards, and medical disclaimer."
};

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-10">
        <h1 className="text-4xl font-black text-ink">Editorial Policy &amp; Medical Disclaimer</h1>
        <p className="mt-2 text-sm font-semibold text-muted">Last updated: April 25, 2025</p>

        <div className="mt-8 space-y-8 leading-8 text-slate-700">

          <section>
            <h2 className="text-2xl font-black text-ink">Medical disclaimer</h2>
            <div className="mt-4 rounded-2xl border border-coral/30 bg-coral/10 p-5 text-slate-800">
              <p>
                All content on BMI Checks — including calculator results, category explanations,
                educational articles, and any health-related information — is provided for
                <strong> general informational purposes only</strong>. It does not constitute and
                must not be treated as medical advice, clinical diagnosis, or a recommendation for
                treatment of any kind.
              </p>
              <p className="mt-3">
                Always consult a qualified healthcare professional before making any decisions about
                your health, diet, exercise, or any other health-related matter. If you are
                experiencing a medical emergency, contact your local emergency service immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">What BMI Checks is and is not</h2>
            <p className="mt-3">
              BMI Checks is an independent health utility website. It provides calculators and
              educational content about body composition metrics — Body Mass Index, Basal Metabolic
              Rate, ideal weight, calorie needs, and body fat estimation — for general informational
              purposes only.
            </p>
            <p className="mt-3">
              BMI Checks is <strong>not</strong> a medical institution, clinical service, or
              registered healthcare provider. The site does not employ medical doctors, dietitians,
              or clinical staff. No content on this site is intended to diagnose, treat, cure, or
              prevent any disease or medical condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">How content is created</h2>
            <p className="mt-3">
              All educational content on BMI Checks is written originally by the site owner,
              Ricardo Diaz. Content is not auto-generated and is reviewed before publication.
              The writing process for each topic includes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Consulting publicly available guidance from authoritative health organisations</li>
              <li>Cross-referencing formulas against peer-reviewed sources or established clinical references</li>
              <li>Writing original explanations that accurately represent the consensus without overstating what calculations can tell a user</li>
              <li>Including appropriate limitations, caveats, and medical disclaimers on every page</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Sources and references</h2>
            <p className="mt-3">
              BMI Checks relies on guidance and data from the following authoritative organisations:
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              {[
                { label: "World Health Organization (WHO) — obesity and overweight", href: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" },
                { label: "CDC — About Body Mass Index", href: "https://www.cdc.gov/bmi/about/index.html" },
                { label: "CDC — Adult BMI categories", href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
                { label: "NHS — BMI healthy weight calculator", href: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults" },
                { label: "American Council on Exercise (ACE) — body fat categories", href: "https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/" },
                { label: "Mifflin MD et al. (1990) — BMR equation", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
                { label: "Devine BJ (1974) — ideal body weight formula", href: "https://pubmed.ncbi.nlm.nih.gov/4346888/" },
              ].map((ref) => (
                <li key={ref.href}>
                  <a href={ref.href} className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer" target="_blank">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Calculator accuracy and limitations</h2>
            <p className="mt-3">
              All calculators on BMI Checks use standard, widely published formulas. However, every
              formula has limitations:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong>BMI</strong> does not distinguish fat from muscle, bone, or fluid and cannot assess body composition directly.</li>
              <li><strong>BMR and calorie calculators</strong> produce estimates. Actual metabolic rate varies by genetics, health status, hormones, and medications.</li>
              <li><strong>Ideal weight formulas</strong> were developed for clinical drug dosing and do not account for body composition, ethnicity, or age-related changes.</li>
              <li><strong>Body fat calculators</strong> using circumference measurements are less accurate than DEXA scans or hydrostatic weighing.</li>
            </ul>
            <p className="mt-3">
              Results should be treated as general estimates, not precise clinical measurements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Content review and update schedule</h2>
            <p className="mt-3">
              Calculator logic is tested and verified before publication. Educational content is
              reviewed at least annually or when significant changes to public health guidance are
              published by major health authorities. The last full site review was completed in
              April 2025.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">How to report errors</h2>
            <p className="mt-3">
              If you believe any content on BMI Checks contains a factual error, an outdated
              reference, or a calculation mistake, please contact us. Corrections are prioritised
              and addressed promptly.
            </p>
            <p className="mt-3">
              Email:{" "}
              <a href="mailto:contact@bmichecks.com" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                contact@bmichecks.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
