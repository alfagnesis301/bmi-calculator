import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BMI Checks",
  description: "Privacy Policy for bmichecks.com — how we handle cookies, advertising, and your data."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-10">
        <h1 className="text-4xl font-black text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm font-semibold text-muted">Last reviewed: April 25, 2026</p>

        <div className="mt-8 space-y-8 leading-8 text-slate-700">

          <section>
            <h2 className="text-2xl font-black text-ink">Overview</h2>
            <p className="mt-3">
              This Privacy Policy explains how BMI Checks (<strong>bmichecks.com</strong>), owned by
              Ricardo Diaz, United Kingdom, collects, uses, and protects information when you visit
              this website. By using BMI Checks, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Information we collect</h2>
            <p className="mt-3">
              <strong>Calculator data:</strong> The BMI calculator runs entirely in your browser. Any
              measurements you enter (age, height, weight) are never sent to our servers. If you use
              the optional &quot;Save Locally&quot; feature, results are stored only on your own device using
              your browser&apos;s localStorage and are not accessible to us.
            </p>
            <p className="mt-3">
              <strong>Usage data:</strong> Like most websites, our hosting provider (Netlify) may
              automatically collect standard server logs including your IP address, browser type,
              referring page, and pages visited. This data is used for security and performance
              monitoring and is governed by{" "}
              <a href="https://www.netlify.com/privacy/" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                Netlify&apos;s Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Cookies</h2>
            <p className="mt-3">
              BMI Checks uses cookies and similar tracking technologies for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Essential cookies:</strong> We store your cookie consent preference in your
                browser so we do not ask again on every visit.
              </li>
              <li>
                <strong>Advertising cookies:</strong> If you accept cookies, we may serve
                advertisements through Google AdSense. Google and its partners use cookies to serve
                ads based on your prior visits to this and other websites. These cookies allow Google
                to personalise ads to your interests.
              </li>
            </ul>
            <p className="mt-3">
              You can control or delete cookies through your browser settings at any time. Withdrawing
              consent may affect the display or personalisation of advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Google AdSense and advertising</h2>
            <p className="mt-3">
              BMI Checks uses Google AdSense to display advertisements. Google AdSense uses cookies
              (including the DoubleClick cookie) to serve ads based on your visits to this site and
              other sites on the internet. This allows Google and its partners to show you ads that
              may be relevant to your interests.
            </p>
            <p className="mt-3">
              You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a href="https://www.aboutads.info/choices/" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                aboutads.info
              </a>.
              You can also opt out of a third-party vendor&apos;s use of cookies by visiting the{" "}
              <a href="https://www.networkadvertising.org/choices/" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                Network Advertising Initiative opt-out page
              </a>.
            </p>
            <p className="mt-3">
              For more information on how Google uses data when you use our site, visit:{" "}
              <a href="https://policies.google.com/technologies/partner-sites" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                How Google uses information from sites that use our services
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Third-party vendors</h2>
            <p className="mt-3">
              We work with the following third-party services that may process data in connection with
              your visit:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Netlify</strong> — website hosting and CDN.{" "}
                <a href="https://www.netlify.com/privacy/" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">Privacy policy</a>
              </li>
              <li>
                <strong>Google AdSense / Google LLC</strong> — advertising services.{" "}
                <a href="https://policies.google.com/privacy" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">Privacy policy</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">UK GDPR and your rights</h2>
            <p className="mt-3">
              As a UK-based website, BMI Checks is subject to the UK General Data Protection Regulation
              (UK GDPR). Where we rely on your consent to process data (for example, for advertising
              cookies), you have the right to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Withdraw consent at any time by declining cookies or clearing your browser cookies</li>
              <li>Request access to any personal data we hold about you</li>
              <li>Request deletion of any personal data we hold about you</li>
              <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">ico.org.uk</a>
              </li>
            </ul>
            <p className="mt-3">
              Because the calculator runs in your browser and we do not store personal health data on
              our servers, the personal data we hold is limited to standard server logs retained by
              Netlify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Children&apos;s privacy</h2>
            <p className="mt-3">
              BMI Checks is not directed at children under 13. We do not knowingly collect personal
              information from children. If you believe a child has provided personal information
              through this site, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Changes to this policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. Continued use of the site after any changes
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-ink">Contact</h2>
            <p className="mt-3">
              For privacy-related questions or requests, contact Ricardo Diaz at{" "}
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
