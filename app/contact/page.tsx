import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | BMI Calculator",
  description: "Contact information for BMI Calculator."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
        <h1 className="text-4xl font-black text-ink">Contact</h1>
        <p className="mt-5 leading-8 text-slate-700">
          Use this page as the editable contact hub for [WEBSITE_NAME]. Before publishing, replace
          the placeholders with the correct owner, country, and support details.
        </p>

        <div className="mt-8 rounded-2xl bg-mist p-5 leading-8 text-slate-700">
          <p>
            <strong className="text-ink">Owner:</strong> [OWNER_NAME]
          </p>
          <p>
            <strong className="text-ink">Email:</strong> [CONTACT_EMAIL]
          </p>
          <p>
            <strong className="text-ink">Country:</strong> [COUNTRY]
          </p>
        </div>

        <p className="mt-6 text-sm leading-7 text-muted">
          Do not send urgent medical questions through this website. For personal health concerns,
          contact a qualified healthcare provider or local emergency service.
        </p>
      </div>
    </main>
  );
}
