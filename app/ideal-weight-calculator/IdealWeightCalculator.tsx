"use client";

import { FormEvent, useState } from "react";

type Gender = "male" | "female";
type Unit = "metric" | "us";

type Result = {
  devine: number;
  robinson: number;
  miller: number;
  average: number;
  unit: "kg";
};

function heightToInches(feet: number, inches: number) {
  return feet * 12 + inches;
}

function cmToInches(cm: number) {
  return cm / 2.54;
}

function calcIdealWeight(heightIn: number, gender: Gender): Result {
  const f = gender === "male";
  const base = heightIn - 60;
  const devine = Math.round(f ? 50 + 2.3 * base : 45.5 + 2.3 * base);
  const robinson = Math.round(f ? 52 + 1.9 * base : 49 + 1.7 * base);
  const miller = Math.round(f ? 56.2 + 1.41 * base : 53.1 + 1.36 * base);
  const average = Math.round((devine + robinson + miller) / 3);
  return { devine, robinson, miller, average, unit: "kg" };
}

const inputClass =
  "mt-2 h-[3.25rem] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

export function IdealWeightCalculator() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [gender, setGender] = useState<Gender>("male");
  const [heightCm, setHeightCm] = useState("175");
  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("9");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    let heightIn: number;
    if (unit === "metric") {
      const cm = parseFloat(heightCm);
      if (!isFinite(cm) || cm < 60 || cm > 250) {
        setError("Enter a height between 60 and 250 cm.");
        return;
      }
      heightIn = cmToInches(cm);
    } else {
      const f = parseFloat(feet);
      const i = parseFloat(inches);
      if (!isFinite(f) || f < 1 || f > 8 || !isFinite(i) || i < 0 || i > 11) {
        setError("Enter a valid height.");
        return;
      }
      heightIn = heightToInches(f, i);
    }

    if (heightIn < 24 || heightIn > 96) {
      setError("Height is outside the supported range.");
      return;
    }

    setResult(calcIdealWeight(heightIn, gender));
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-black text-ink">Calculate your ideal weight</h2>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 rounded-full bg-slate-100 p-1">
          {(["metric", "us"] as Unit[]).map((u) => (
            <button key={u} type="button"
              onClick={() => { setUnit(u); setResult(null); setError(""); }}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 ${unit === u ? "bg-white text-ink shadow-line" : "text-muted hover:text-ink"}`}>
              {u === "metric" ? "Metric Units" : "US Units"}
            </button>
          ))}
        </div>

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

        {unit === "metric" ? (
          <div>
            <label htmlFor="heightCm" className="flex items-center justify-between text-sm font-bold text-ink">
              <span>Height</span><span className="text-xs uppercase tracking-[0.08em] text-muted">cm</span>
            </label>
            <input id="heightCm" type="number" inputMode="decimal" min="60" max="250"
              value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className={inputClass} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="feet" className="text-sm font-bold text-ink">Feet</label>
              <input id="feet" type="number" inputMode="numeric" min="1" max="8"
                value={feet} onChange={(e) => setFeet(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="inches" className="text-sm font-bold text-ink">Inches</label>
              <input id="inches" type="number" inputMode="numeric" min="0" max="11"
                value={inches} onChange={(e) => setInches(e.target.value)} className={inputClass} />
            </div>
          </div>
        )}

        {error && <p className="rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700" role="alert">{error}</p>}

        <button type="submit"
          className="w-full min-h-[3.25rem] rounded-2xl bg-teal-700 px-5 py-3.5 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">
          Calculate Ideal Weight
        </button>
      </form>

      {result && (
        <div className="mt-8 animate-result space-y-4" aria-live="polite">
          <div className="rounded-2xl bg-teal-50 border border-teal-200 p-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-teal-700">Average estimate</p>
            <p className="mt-1 text-4xl font-black text-ink">{result.average} kg</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl bg-mist p-4 text-center">
              <p className="font-bold text-muted">Devine</p>
              <p className="mt-1 text-xl font-black text-ink">{result.devine} kg</p>
            </div>
            <div className="rounded-xl bg-mist p-4 text-center">
              <p className="font-bold text-muted">Robinson</p>
              <p className="mt-1 text-xl font-black text-ink">{result.robinson} kg</p>
            </div>
            <div className="rounded-xl bg-mist p-4 text-center">
              <p className="font-bold text-muted">Miller</p>
              <p className="mt-1 text-xl font-black text-ink">{result.miller} kg</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-muted">
            Results are estimates. Healthy weight depends on many individual factors beyond height and gender.
          </p>
        </div>
      )}
    </section>
  );
}
