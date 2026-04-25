import { faqItems } from "@/lib/seo";

export function FAQ() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">FAQ</p>
        <h2 className="mt-2 text-3xl font-black text-ink">BMI questions, answered plainly</h2>
      </div>
      <div className="grid gap-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-line"
          >
            <summary className="cursor-pointer list-none text-lg font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
              <span className="inline-flex w-full items-center justify-between gap-4">
                {item.question}
                <span className="rounded-full bg-mist px-2.5 py-1 text-sm text-teal-700 group-open:hidden">
                  +
                </span>
                <span className="hidden rounded-full bg-mist px-3 py-1 text-sm text-teal-700 group-open:inline">
                  -
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
