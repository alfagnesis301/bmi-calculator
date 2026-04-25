import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | BMI Calculator",
  description: "Editable terms of use template for BMI Calculator."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
        <h1 className="text-4xl font-black text-ink">Terms of Use</h1>
        <p className="mt-4 text-sm font-semibold text-muted">
          Last updated: [LAST_UPDATED_DATE]
        </p>

        <div className="mt-8 space-y-7 leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-ink">Acceptance</h2>
            <p className="mt-3">
              By using [WEBSITE_NAME], you agree to these Terms of Use. Replace placeholders with
              accurate business and jurisdiction details before publishing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Informational use only</h2>
            <p className="mt-3">
              The calculator and educational content are provided for general informational purposes
              only. They are not medical advice, diagnosis, or treatment. Always consult a qualified
              healthcare provider for personal health concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Permitted use</h2>
            <p className="mt-3">
              You may use the website for lawful personal purposes. You agree not to misuse the site,
              attempt unauthorized access, interfere with availability, or copy content in a way that
              violates applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">No warranties</h2>
            <p className="mt-3">
              [WEBSITE_NAME] is provided as-is and as available. [OWNER_NAME] does not guarantee that
              the site will be error-free, uninterrupted, or suitable for your specific needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Limitation of liability</h2>
            <p className="mt-3">
              To the extent permitted by law in [COUNTRY], [OWNER_NAME] is not liable for losses
              arising from use of the website or reliance on calculator results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to [CONTACT_EMAIL].</p>
          </section>
        </div>
      </div>
    </main>
  );
}
