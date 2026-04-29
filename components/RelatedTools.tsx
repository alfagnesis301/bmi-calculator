const tools = [
  { name: "How to Find Your BMI Score", href: "/how-to-find-your-bmi-score" },
  { name: "Healthy BMI Range", href: "/healthy-bmi-range" },
  { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
  { name: "BMR Calculator", href: "/bmr-calculator" },
  { name: "Calorie Calculator", href: "/calorie-calculator" },
  { name: "Body Fat Calculator", href: "/body-fat-calculator" }
];

export function RelatedTools() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
      <h2 className="text-2xl font-black text-ink">Related tools</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            {tool.name}
          </a>
        ))}
      </div>
    </section>
  );
}
