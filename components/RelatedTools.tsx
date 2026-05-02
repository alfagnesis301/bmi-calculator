import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

const tools = {
  en: [
    { name: "How to Find Your BMI Score", href: "/how-to-find-your-bmi-score" },
    { name: "Healthy BMI Range", href: "/healthy-bmi-range" },
    { name: "BMI Categories", href: "/bmi-categories" },
    { name: "BMI Formula", href: "/bmi-formula" },
    { name: "BMI Chart", href: "/bmi-chart" },
    { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
    { name: "BMR Calculator", href: "/bmr-calculator" },
    { name: "Calorie Calculator", href: "/calorie-calculator" },
    { name: "Body Fat Calculator", href: "/body-fat-calculator" }
  ],
  es: [
    { name: "Cómo encontrar tu puntuación de IMC", href: "/how-to-find-your-bmi-score" },
    { name: "Rango saludable de IMC", href: "/healthy-bmi-range" },
    { name: "Categorías de IMC", href: "/bmi-categories" },
    { name: "Fórmula del IMC", href: "/bmi-formula" },
    { name: "Tabla de IMC", href: "/bmi-chart" },
    { name: "Calculadora de peso ideal", href: "/ideal-weight-calculator" },
    { name: "Calculadora de TMB", href: "/bmr-calculator" },
    { name: "Calculadora de calorías", href: "/calorie-calculator" },
    { name: "Calculadora de grasa corporal", href: "/body-fat-calculator" }
  ]
};

type RelatedToolsProps = {
  locale?: Locale;
};

export function RelatedTools({ locale = "en" }: RelatedToolsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
      <h2 className="text-2xl font-black text-ink">
        {locale === "es" ? "Herramientas y guías relacionadas" : "Related tools and guides"}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {tools[locale].map((tool) => (
          <Link
            key={tool.name}
            href={localizedPath(tool.href, locale)}
            className="rounded-xl border border-slate-200 bg-mist px-4 py-4 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
