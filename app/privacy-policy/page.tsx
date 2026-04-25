import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BMI Calculator",
  description: "Editable privacy policy template for BMI Calculator."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
        <h1 className="text-4xl font-black text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm font-semibold text-muted">
          Last updated: April 25, 2025
        </p>

        <div className="mt-8 space-y-7 leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-ink">Overview</h2>
            <p className="mt-3">
              This Privacy Policy explains how BMI Checks handles information when you use this
              website. Replace the placeholders in this document with accurate details before
              publishing. This page does not create legal advice for Ricardo Diaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">User data</h2>
            <p className="mt-3">
              The BMI calculator can run in your browser without requiring an account. If you choose
              to save a result locally, the result is stored in your browser on your device using
              localStorage. BMI Checks does not receive that locally saved result unless you add
              server-side features in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Cookies</h2>
            <p className="mt-3">
              BMI Checks may use cookies or similar technologies to operate the site, remember
              preferences, measure performance, or support advertising. You can control cookies
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Third-party vendors</h2>
            <p className="mt-3">
              Third-party services may process information according to their own privacy policies.
              These services may include hosting providers, analytics providers, security tools, and
              advertising partners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Google AdSense and advertising cookies</h2>
            <p className="mt-3">
              If Google AdSense or Google advertising services are enabled, Google and its partners
              may use cookies to serve ads based on visits to this and other websites. Users may be
              able to manage ad personalization through Google advertising settings. Add your final
              disclosures after AdSense is configured and approved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Analytics placeholder</h2>
            <p className="mt-3">
              If analytics are added, describe the provider, the data collected, the purpose of
              collection, retention settings, and opt-out options here. Current provider:
              [ANALYTICS_PROVIDER].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Your choices</h2>
            <p className="mt-3">
              Depending on your location in Spain, you may have rights to access, delete, or
              correct certain personal information. Add the correct rights and process for your
              jurisdiction before launch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact Ricardo Diaz at contact@bmichecks.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
