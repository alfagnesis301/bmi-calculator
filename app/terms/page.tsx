import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | BMI Checks",
  description: "Terms of use for bmichecks.com — your rights and responsibilities when using this site."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-10">
        <h1 className="text-4xl font-black text-ink">Terms of Use</h1>
        <p className="mt-2 text-sm font-semibold text-muted">Last reviewed: April 25, 2026</p>

        <div className="mt-8 space-y-8 leading-8 text-slate-700">

          <section>
            <h2 className="text-2xl font-black text-ink">Acceptance</h2>
            <p className="mt-3">
              By accessing or using BMI Checks (<strong>bmichecks.com</strong>), you agree to these
              Terms of Use. If you do not agree, please do not use this website. These terms are
              governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Informational use only</h2>
            <p className="mt-3">
              The BMI calculator and all educational content on BMI Checks are provided for general
              informational purposes only. Nothing on this website constitutes medical advice,
              diagnosis, or treatment. Results produced by the calculator are estimates based on
              standard formulas and are not a substitute for professional clinical assessment.
            </p>
            <p className="mt-3">
              Always consult a qualified healthcare provider before making decisions about your health,
              diet, or exercise. In an emergency, contact your local emergency service immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Permitted use</h2>
            <p className="mt-3">
              You may use BMI Checks for lawful personal, non-commercial purposes. You agree not to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Attempt to gain unauthorised access to any part of the site or its infrastructure</li>
              <li>Use automated tools to scrape or copy site content in bulk</li>
              <li>Reproduce, republish, or redistribute content from this site without permission</li>
              <li>Use this site in any way that violates applicable UK or international law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Intellectual property</h2>
            <p className="mt-3">
              All original content on BMI Checks, including text, design, and code, is the property
              of Ricardo Diaz unless otherwise stated. The standard BMI formulas used by the
              calculator are in the public domain. External references (CDC, WHO, NHS) are linked
              for informational purposes and remain the property of their respective organisations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Third-party links</h2>
            <p className="mt-3">
              BMI Checks links to external websites such as the CDC, WHO, and NHS for reference.
              We are not responsible for the content, privacy practices, or availability of those
              external sites. Links do not constitute an endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Advertising</h2>
            <p className="mt-3">
              BMI Checks may display advertisements served by Google AdSense. Advertisements are
              clearly labelled. We do not control the content of third-party advertisements and are
              not responsible for any products or services they promote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">No warranties</h2>
            <p className="mt-3">
              BMI Checks is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind,
              express or implied. We do not guarantee that the site will be error-free, uninterrupted,
              or free from viruses or other harmful components. Calculator results are provided in good
              faith but are not guaranteed to be accurate for every individual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law in England and Wales, Ricardo Diaz shall not be
              liable for any direct, indirect, incidental, or consequential loss or damage arising
              from your use of this website or reliance on any calculator result or content published
              here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Changes to these terms</h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time. Changes will be posted on this page
              with an updated date. Continued use of the site after any changes constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href="mailto:contact@bmichecks.com" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                contact@bmichecks.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
