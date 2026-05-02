"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Gender = "male" | "female";
type Result = { maintain: number; mildLoss: number; loss: number; mildGain: number; gain: number };

const activityLevels = {
  en: [
    { label: "Sedentary (little or no exercise)", multiplier: 1.2 },
    { label: "Lightly active (1-3 days/week)", multiplier: 1.375 },
    { label: "Moderately active (3-5 days/week)", multiplier: 1.55 },
    { label: "Very active (6-7 days/week)", multiplier: 1.725 },
    { label: "Extra active (physical job or 2x training)", multiplier: 1.9 }
  ],
  es: [
    { label: "Sedentario (poco o ningún ejercicio)", multiplier: 1.2 },
    { label: "Ligeramente activo (1-3 días/semana)", multiplier: 1.375 },
    { label: "Moderadamente activo (3-5 días/semana)", multiplier: 1.55 },
    { label: "Muy activo (6-7 días/semana)", multiplier: 1.725 },
    { label: "Extra activo (trabajo físico o entrenamiento intenso)", multiplier: 1.9 }
  ]
};

const labels = {
  en: {
    title: "Calculate your daily calories",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    yrs: "yrs",
    height: "Height",
    weight: "Weight",
    activity: "Activity level",
    button: "Calculate Calories",
    ageError: "Enter an age between 2 and 120.",
    heightError: "Enter a height between 60 and 250 cm.",
    weightError: "Enter a weight between 10 and 300 kg.",
    rows: {
      mildLoss: "Mild weight loss (-0.25 kg/week)",
      loss: "Weight loss (-0.5 kg/week)",
      maintain: "Maintain weight",
      mildGain: "Mild weight gain (+0.25 kg/week)",
      gain: "Weight gain (+0.5 kg/week)"
    },
    kcal: "kcal",
    note: "These are estimates based on the Mifflin-St Jeor equation. Individual needs vary."
  },
  es: {
    title: "Calcula tus calorías diarias",
    gender: "Género",
    male: "Masculino",
    female: "Femenino",
    age: "Edad",
    yrs: "años",
    height: "Altura",
    weight: "Peso",
    activity: "Nivel de actividad",
    button: "Calcular calorías",
    ageError: "Introduce una edad entre 2 y 120.",
    heightError: "Introduce una altura entre 60 y 250 cm.",
    weightError: "Introduce un peso entre 10 y 300 kg.",
    rows: {
      mildLoss: "Pérdida ligera de peso (-0.25 kg/semana)",
      loss: "Pérdida de peso (-0.5 kg/semana)",
      maintain: "Mantenimiento",
      mildGain: "Ganancia ligera de peso (+0.25 kg/semana)",
      gain: "Ganancia de peso (+0.5 kg/semana)"
    },
    kcal: "kcal",
    note: "Estas cifras son estimaciones basadas en la ecuación Mifflin-St Jeor. Las necesidades individuales pueden variar."
  }
};

const inputClass =
  "mt-2 h-[3.25rem] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

export function CalorieCalculator({ locale = "en" }: { locale?: Locale }) {
  const t = labels[locale];
  const activities = activityLevels[locale];
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

    if (!isFinite(a) || a < 2 || a > 120) { setError(t.ageError); return; }
    if (!isFinite(h) || h < 60 || h > 250) { setError(t.heightError); return; }
    if (!isFinite(w) || w < 10 || w > 300) { setError(t.weightError); return; }

    const bmr = gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * activities[activityIdx].multiplier;
    setResult({
      maintain: Math.round(tdee),
      mildLoss: Math.round(tdee - 250),
      loss: Math.round(tdee - 500),
      mildGain: Math.round(tdee + 250),
      gain: Math.round(tdee + 500)
    });
  }

  const rows = result ? [
    { label: t.rows.mildLoss, kcal: result.mildLoss, color: "bg-sky-50 border-sky-200" },
    { label: t.rows.loss, kcal: result.loss, color: "bg-sky-100 border-sky-300" },
    { label: t.rows.maintain, kcal: result.maintain, color: "bg-teal-50 border-teal-200 font-extrabold" },
    { label: t.rows.mildGain, kcal: result.mildGain, color: "bg-amber-50 border-amber-200" },
    { label: t.rows.gain, kcal: result.gain, color: "bg-amber-100 border-amber-300" }
  ] : [];

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-black text-ink">{t.title}</h2>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="text-sm font-bold text-ink">{t.gender}</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
            {(["male", "female"] as Gender[]).map((g) => (
              <label key={g} className={`flex h-11 cursor-pointer items-center justify-center rounded-xl border px-2 text-sm font-black transition ${gender === g ? "border-teal-600 bg-white text-teal-950 shadow-line" : "border-transparent text-muted hover:bg-white/70"}`}>
                <input className="sr-only" type="radio" name="gender" value={g} checked={gender === g} onChange={() => setGender(g)} />
                {g === "male" ? t.male : t.female}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { id: "age", label: t.age, suffix: t.yrs, value: age, set: setAge },
            { id: "height", label: t.height, suffix: "cm", value: heightCm, set: setHeightCm },
            { id: "weight", label: t.weight, suffix: "kg", value: weightKg, set: setWeightKg }
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
          <label htmlFor="activity" className="text-sm font-bold text-ink">{t.activity}</label>
          <select id="activity" value={activityIdx}
            onChange={(e) => setActivityIdx(Number(e.target.value))}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-ink outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100">
            {activities.map((level, i) => (
              <option key={level.label} value={i}>{level.label}</option>
            ))}
          </select>
        </div>

        {error && <p className="rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700" role="alert">{error}</p>}

        <button type="submit"
          className="w-full min-h-[3.25rem] rounded-2xl bg-teal-700 px-5 py-3.5 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">
          {t.button}
        </button>
      </form>

      {result && (
        <div className="mt-8 animate-result space-y-3" aria-live="polite">
          {rows.map((row) => (
            <div key={row.label} className={`flex items-center justify-between gap-4 rounded-xl border p-4 ${row.color}`}>
              <span className="text-sm font-semibold text-slate-700">{row.label}</span>
              <span className="text-lg font-black text-ink">{row.kcal} {t.kcal}</span>
            </div>
          ))}
          <p className="pt-2 text-sm leading-6 text-muted">{t.note}</p>
        </div>
      )}
    </section>
  );
}
