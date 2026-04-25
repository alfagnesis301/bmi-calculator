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
          Have a question, a correction, or feedback about BMI Checks? Use the email below and
          we will get back to you as soon as possible.
        </p>

        <div className="mt-8 rounded-2xl bg-mist p-5 leading-8 text-slate-700">
          <p>
            <strong className="text-ink">Owner:</strong> Ricardo Diaz
          </p>
          <p>
            <strong className="text-ink">Email:</strong>{" "}
            <a href="mailto:contact@bmichecks.com" className="text-teal-700 underline-offset-4 hover:underline">
              contact@bmichecks.com
            </a>
          </p>
          <p>
            <strong className="text-ink">Website:</strong> bmichecks.com
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
