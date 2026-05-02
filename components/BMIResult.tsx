import { formatHealthyRange, getLocalizedBMICategory } from "@/lib/bmi";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import type { BMIResultData } from "@/types/bmi";
import { BMIChart } from "./BMIChart";

type BMIResultProps = {
  result: BMIResultData | null;
  locale?: Locale;
};

export function BMIResult({ result, locale = "en" }: BMIResultProps) {
  const t = getDictionary(locale).result;

  if (!result) {
    return (
      <section className="relative overflow-hidden rounded-[2rem] border border-white bg-ink p-6 text-white shadow-soft ring-1 ring-slate-200/70 sm:p-7 lg:p-8">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-teal-400/25 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-coral/25 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-200">{t.preview}</p>
          <h2 className="mt-2 text-2xl font-black leading-tight">{t.emptyTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-200">
            {t.emptyText}
          </p>
        </div>
        <div className="relative mt-7 rounded-2xl bg-white p-4 text-muted">
          <BMIChart locale={locale} />
        </div>
        <div className="relative mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-white/10 p-4">
            <strong className="block text-lg text-white">18.5 - 24.9</strong>
            <span className="text-slate-300">{t.healthyBmiRange}</span>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <strong className="block text-lg text-white">{t.private}</strong>
            <span className="text-slate-300">{t.runsInBrowser}</span>
          </div>
        </div>
      </section>
    );
  }

  const category = getLocalizedBMICategory(result.category, locale);

  return (
    <section
      className="animate-result rounded-[2rem] border border-white bg-white p-6 shadow-soft ring-1 ring-slate-200/70 sm:p-7 lg:p-8"
      aria-live="polite"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-700">
            {t.yourBmi}
          </p>
          <div className="mt-1 flex items-end gap-3">
            <strong className="text-5xl font-black text-ink">{result.bmi.toFixed(1)}</strong>
            <span className="pb-2 text-sm font-semibold text-muted">kg/m2</span>
          </div>
        </div>
        <div className={`rounded-xl border px-4 py-3 text-sm font-bold ${result.category.accentClass}`}>
          {category.label}
        </div>
      </div>

      <div className="mt-6">
        <BMIChart bmi={result.bmi} locale={locale} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
            {t.healthyBmiRange}
          </p>
          <p className="mt-1 text-lg font-bold text-ink">18.5 - 24.9 kg/m2</p>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
            {t.healthyWeightEstimate}
          </p>
          <p className="mt-1 text-lg font-bold text-ink">
            {formatHealthyRange(result.healthyRange)}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-700">{category.description}</p>
      <p className="mt-4 rounded-xl border border-coral/30 bg-coral/10 p-4 text-sm leading-6 text-slate-800">
        {t.disclaimer}
      </p>
    </section>
  );
}
