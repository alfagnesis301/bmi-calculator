import { formatHealthyRange } from "@/lib/bmi";
import type { BMIResultData } from "@/types/bmi";
import { BMIChart } from "./BMIChart";

type BMIResultProps = {
  result: BMIResultData | null;
};

export function BMIResult({ result }: BMIResultProps) {
  if (!result) {
    return (
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-6 text-muted">
        <h2 className="text-lg font-bold text-ink">Your BMI result will appear here</h2>
        <p className="mt-2 text-sm leading-6">
          Enter your measurements and select Calculate BMI to see your BMI number, category, healthy
          BMI range, and an approximate healthy weight range for your height.
        </p>
        <div className="mt-6">
          <BMIChart />
        </div>
      </section>
    );
  }

  return (
    <section
      className="animate-result rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
      aria-live="polite"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-700">
            Your BMI
          </p>
          <div className="mt-1 flex items-end gap-3">
            <strong className="text-5xl font-black text-ink">{result.bmi.toFixed(1)}</strong>
            <span className="pb-2 text-sm font-semibold text-muted">kg/m2</span>
          </div>
        </div>
        <div className={`rounded-xl border px-4 py-3 text-sm font-bold ${result.category.accentClass}`}>
          {result.category.label}
        </div>
      </div>

      <div className="mt-6">
        <BMIChart bmi={result.bmi} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
            Healthy BMI range
          </p>
          <p className="mt-1 text-lg font-bold text-ink">18.5 - 24.9 kg/m2</p>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
            Healthy weight estimate
          </p>
          <p className="mt-1 text-lg font-bold text-ink">
            {formatHealthyRange(result.healthyRange)}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-700">{result.category.description}</p>
      <p className="mt-4 rounded-xl border border-coral/30 bg-coral/10 p-4 text-sm leading-6 text-slate-800">
        This calculator is for general informational purposes only and does not replace professional
        medical advice. Always consult a qualified healthcare provider for personal health concerns.
      </p>
    </section>
  );
}
