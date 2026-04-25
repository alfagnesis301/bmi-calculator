"use client";

import { FormEvent, useState } from "react";

type Gender = "male" | "female";

const inputClass =
  "mt-2 h-[3.25rem] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

function getCategory(pct: number, gender: Gender): { label: string; color: string } {
  if (gender === "male") {
    if (pct <= 5) return { label: "Essential fat", color: "bg-sky-50 border-sky-200 text-sky-900" };
    if (pct <= 13) return { label: "Athletes", color: "bg-teal-50 border-teal-200 text-teal-900" };
    if (pct <= 17) return { label: "Fitness", color: "bg-teal-50 border-teal-200 text-teal-900" };
    if (pct <= 24) return { label: "Average", color: "bg-amber-50 border-amber-200 text-amber-900" };
    return { label: "Obese", color: "bg-rose-50 border-rose-200 text-rose-900" };
  }
  if (pct <= 13) return { label: "Essential fat", color: "bg-sky-50 border-sky-200 text-sky-900" };
  if (pct <= 20) return { label: "Athletes", color: "bg-teal-50 border-teal-200 text-teal-900" };
  if (pct <= 24) return { label: "Fitness", color: "bg-teal-50 border-teal-200 text-teal-900" };
  if (pct <= 31) return { label: "Average", color: "bg-amber-50 border-amber-200 text-amber-900" };
  return { label: "Obese", color: "bg-rose-50 border-rose-200 text-rose-900" };
}

export function BodyFatCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("175");
  const [waist, setWaist] = useState("85");
  const [neck, setNeck] = useState("38");
  const [hip, setHip] = useState("95");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    if (!isFinite(h) || h < 60 || h > 250) { setError("Enter a valid height (60–250 cm)."); return; }
    if (!isFinite(w) || w < 40 || w > 200) { setError("Enter a valid waist measurement (40–200 cm)."); return; }
    if (!isFinite(n) || n < 20 || n > 80) { setError("Enter a valid neck measurement (20–80 cm)."); return; }
    if (gender === "female" && (!isFinite(hp) || hp < 50 || hp > 200)) {
      setError("Enter a valid hip measurement (50–200 cm)."); return;
    }
    if (w <= n) { setError("Waist must be greater than neck measurement."); return; }

    let pct: number;
    if (gender === "male") {
      pct = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      pct = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }

    if (!isFinite(pct) || pct < 0) { setError("Could not calculate. Please check your measurements."); return; }
    setResult(Math.round(pct * 10) / 10);
  }

  const category = result !== null ? getCategory(result, gender) : null;

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-black text-ink">Estimate your body fat</h2>
      <p className="mt-2 text-sm leading-6 text-muted">Measure at the widest point. All measurements in cm.</p>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="text-sm font-bold text-ink">Gender</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
            {(["male", "female"] as Gender[]).map((g) => (
              <label key={g} className={`flex h-11 cursor-pointer items-center justify-center rounded-xl border px-2 text-sm font-black capitalize transition ${gender === g ? "border-teal-600 bg-white text-teal-950 shadow-line" : "border-transparent text-muted hover:bg-white/70"}`}>
                <input className="sr-only" type="radio" name="gender" value={g} checked={gender === g}
                  onChange={() => { setGender(g); setResult(null); setError(""); }} />
                {g}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={`grid gap-5 ${gender === "female" ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {[
            { id: "height-bf", label: "Height", value: height, set: setHeight },
            { id: "waist-bf", label: "Waist", value: waist, set: setWaist },
            { id: "neck-bf", label: "Neck", value: neck, set: setNeck },
            ...(gender === "female" ? [{ id: "hip-bf", label: "Hip", value: hip, set: setHip }] : [])
          ].map(({ id, label, value, set }) => (
            <div key={id}>
              <label htmlFor={id} className="flex items-center justify-between text-sm font-bold text-ink">
                <span>{label}</span>
                <span className="text-xs uppercase tracking-[0.08em] text-muted">cm</span>
              </label>
              <input id={id} type="number" inputMode="decimal" value={value}
                onChange={(e) => set(e.target.value)} className={inputClass} />
            </div>
          ))}
        </div>

        {error && <p className="rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700" role="alert">{error}</p>}

        <button type="submit"
          className="w-full min-h-[3.25rem] rounded-2xl bg-teal-700 px-5 py-3.5 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">
          Calculate Body Fat
        </button>
      </form>

      {result !== null && category && (
        <div className="mt-8 animate-result space-y-4" aria-live="polite">
          <div className={`rounded-2xl border p-5 text-center ${category.color}`}>
            <p className="text-sm font-bold uppercase tracking-[0.1em]">Estimated body fat</p>
            <p className="mt-1 text-5xl font-black text-ink">{result}%</p>
            <p className="mt-2 text-base font-bold">{category.label}</p>
          </div>
          <p className="text-sm leading-6 text-muted">
            The US Navy method is an estimate. Accuracy depends on measurement technique.
            For a precise reading, consult a healthcare professional.
          </p>
        </div>
      )}
    </section>
  );
}
