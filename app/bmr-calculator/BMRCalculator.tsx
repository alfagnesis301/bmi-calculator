"use client";

import { FormEvent, useState } from "react";

type Gender = "male" | "female";

const activityLevels = [
  { label: "Sedentary (little or no exercise)", multiplier: 1.2 },
  { label: "Lightly active (1–3 days/week)", multiplier: 1.375 },
  { label: "Moderately active (3–5 days/week)", multiplier: 1.55 },
  { label: "Very active (6–7 days/week)", multiplier: 1.725 },
  { label: "Extra active (physical job or 2× training)", multiplier: 1.9 }
];

const inputClass =
  "mt-2 h-[3.25rem] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

type Result = { bmr: number; tdee: number };

export function BMRCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("30");
  const [heightCm, setHeightCm] = useState("175");
  const [weightKg, setWeightKg] = useState("70");
  const [activityIdx, setActivityIdx] = useState(1);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const a = parseFloat(age);
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);

    if (!isFinite(a) || a < 2 || a > 120) { setError("Enter an age between 2 and 120."); return; }
    if (!isFinite(h) || h < 60 || h > 250) { setError("Enter a height between 60 and 250 cm."); return; }
    if (!isFinite(w) || w < 10 || w > 300) { setError("Enter a weight between 10 and 300 kg."); return; }

    const bmr = gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * activityLevels[activityIdx].multiplier;
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee) });
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-black text-ink">Calculate your BMR</h2>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="text-sm font-bold text-ink">Gender</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
            {(["male", "female"] as Gender[]).map((g) => (
              <label key={g} className={`flex h-11 cursor-pointer items-center justify-center rounded-xl border px-2 text-sm font-black capitalize transition ${gender === g ? "border-teal-600 bg-white text-teal-950 shadow-line" : "border-transparent text-muted hover:bg-white/70"}`}>
                <input className="sr-only" type="radio" name="gender" value={g} checked={gender === g} onChange={() => setGender(g)} />
                {g}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { id: "age", label: "Age", suffix: "yrs", value: age, set: setAge },
            { id: "height", label: "Height", suffix: "cm", value: heightCm, set: setHeightCm },
            { id: "weight", label: "Weight", suffix: "kg", value: weightKg, set: setWeightKg }
          ].map(({ id, label, suffix, value, set }) => (
            <div key={id}>
              <label htmlFor={id} className="flex items-center justify-between text-sm font-bold text-ink">
                <span>{label}</span>
                <span className="text-xs uppercase tracking-[0.08em] text-muted">{suffix}</span>
              </label>
              <input id={id} type="number" inputMode="decimal" value={value}
                onChange={(e) => set(e.target.value)} className={inputClass} />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="activity" className="text-sm font-bold text-ink">Activity level</label>
          <select id="activity" value={activityIdx}
            onChange={(e) => setActivityIdx(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-ink outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100">
            {activityLevels.map((l, i) => (
              <option key={i} value={i}>{l.label}</option>
            ))}
          </select>
        </div>

        {error && <p className="rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700" role="alert">{error}</p>}

        <button type="submit"
          className="w-full min-h-[3.25rem] rounded-2xl bg-teal-700 px-5 py-3.5 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">
          Calculate BMR
        </button>
      </form>

      {result && (
        <div className="mt-8 animate-result space-y-4" aria-live="polite">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-teal-50 border border-teal-200 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-teal-700">BMR</p>
              <p className="mt-1 text-3xl font-black text-ink">{result.bmr}</p>
              <p className="text-sm font-semibold text-muted">kcal / day</p>
            </div>
            <div className="rounded-2xl bg-violet/10 border border-violet/20 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet">TDEE</p>
              <p className="mt-1 text-3xl font-black text-ink">{result.tdee}</p>
              <p className="text-sm font-semibold text-muted">kcal / day</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-700">
            <strong>BMR</strong> is your calorie need at complete rest.{" "}
            <strong>TDEE</strong> (Total Daily Energy Expenditure) estimates your daily calorie need
            based on your selected activity level.
          </p>
        </div>
      )}
    </section>
  );
}
