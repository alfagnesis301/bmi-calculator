"use client";

import { FormEvent, ReactNode, useState } from "react";
import {
  calculateMetricBMI,
  calculateUSBMI,
  getBMICategory,
  getHealthyWeightRangeMetric,
  getHealthyWeightRangeUS,
  getLocalizedBMICategory,
  roundBMI,
  validateBMIInput
} from "@/lib/bmi";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { getFieldErrorId, parsePositiveNumber } from "@/lib/validation";
import type { BMIInput, BMIResultData, Gender, UnitSystem } from "@/types/bmi";
import { BMIResult } from "./BMIResult";
import { UnitTabs } from "./UnitTabs";

const inputClass =
  "mt-2 h-[3.25rem] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-ink outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

const errorClass = "mt-2 text-sm font-semibold text-rose-700";

type BMICalculatorProps = {
  locale?: Locale;
};

export function BMICalculator({ locale = "en" }: BMICalculatorProps) {
  const t = getDictionary(locale).calculator;
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [age, setAge] = useState("30");
  const [gender, setGender] = useState<Gender>("optional");
  const [heightCm, setHeightCm] = useState("175");
  const [weightKg, setWeightKg] = useState("70");
  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("9");
  const [weightLb, setWeightLb] = useState("165");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<BMIResultData | null>(null);
  const [status, setStatus] = useState("");

  function handleUnitChange(nextUnit: UnitSystem) {
    setUnit(nextUnit);
    setErrors({});
    setStatus("");
  }

  function buildInput(): BMIInput {
    const parsedAge = parsePositiveNumber(age);

    if (unit === "metric") {
      return {
        unit,
        age: parsedAge,
        gender,
        heightCm: parsePositiveNumber(heightCm),
        weightKg: parsePositiveNumber(weightKg)
      };
    }

    return {
      unit,
      age: parsedAge,
      gender,
      feet: parsePositiveNumber(feet),
      inches: parsePositiveNumber(inches),
      weightLb: parsePositiveNumber(weightLb)
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const input = buildInput();
    const validation = validateBMIInput(input, locale);

    if (!validation.valid) {
      setErrors(validation.errors);
      setResult(null);
      setStatus(t.reviewFields);
      return;
    }

    const bmi =
      input.unit === "metric"
        ? roundBMI(calculateMetricBMI(input.weightKg, input.heightCm))
        : roundBMI(calculateUSBMI(input.weightLb, input.feet, input.inches));

    const healthyRange =
      input.unit === "metric"
        ? getHealthyWeightRangeMetric(input.heightCm)
        : getHealthyWeightRangeUS(input.feet, input.inches);

    const heightLabel =
      input.unit === "metric" ? `${input.heightCm} cm` : `${input.feet} ft ${input.inches} in`;

    setErrors({});
    setResult({
      bmi,
      category: getBMICategory(bmi),
      healthyRange,
      heightLabel,
      createdAt: new Date().toISOString()
    });
    setStatus(`${t.calculated}: ${bmi.toFixed(1)}.`);
  }

  function handleReset() {
    setAge("");
    setGender("optional");
    setHeightCm("");
    setWeightKg("");
    setFeet("");
    setInches("");
    setWeightLb("");
    setErrors({});
    setResult(null);
    setStatus(t.resetDone);
  }

  async function handleCopy() {
    if (!result) return;

    const category = getLocalizedBMICategory(result.category, locale);
    const text = `${locale === "es" ? "IMC" : "BMI"}: ${result.bmi.toFixed(1)} (${category.label}). ${t.healthyWeightRange} ${result.heightLabel}: ${result.healthyRange.min}-${result.healthyRange.max} ${result.healthyRange.unit}.`;

    try {
      await navigator.clipboard.writeText(text);
      setStatus(t.copied);
    } catch {
      setStatus(t.copyUnavailable);
    }
  }

  function handleSave() {
    if (!result) return;

    const category = getLocalizedBMICategory(result.category, locale);
    const date = new Date(result.createdAt).toLocaleString(locale === "es" ? "es-ES" : "en-GB");
    const lines = [
      t.resultFileTitle,
      "-".repeat(40),
      `${t.date}:     ${date}`,
      `${locale === "es" ? "IMC" : "BMI"}:      ${result.bmi.toFixed(1)}`,
      `${t.category}: ${category.label}`,
      `${t.height}:   ${result.heightLabel}`,
      `${t.healthyWeightRange}: ${result.healthyRange.min}-${result.healthyRange.max} ${result.healthyRange.unit}`,
      "",
      t.medicalShort,
      t.medicalAdvice,
    ].join("\n");

    const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bmi-result-${new Date(result.createdAt).toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setStatus(t.downloaded);
  }

  const hasAnyError = Object.keys(errors).length > 0;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(560px,0.98fr)_minmax(420px,0.72fr)]">
      <section
        id="calculator"
        className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-soft ring-1 ring-slate-200/70 sm:p-7 lg:p-8"
        aria-labelledby="calculator-title"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">
              {t.eyebrow}
            </p>
            <h2 id="calculator-title" className="mt-2 text-3xl font-black leading-tight text-ink">
              {t.title}
            </h2>
          </div>
          <span className="w-fit rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800">
            {t.noAccount}
          </span>
        </div>

        <form className="relative mt-6 space-y-6" onSubmit={handleSubmit} noValidate>
          <UnitTabs activeUnit={unit} onChange={handleUnitChange} locale={locale} />

          <div className="grid gap-5 md:grid-cols-[minmax(160px,0.55fr)_minmax(280px,1fr)]">
            <Field label={t.age} name="age" error={errors.age}>
              <input
                id="age"
                name="age"
                type="number"
                inputMode="numeric"
                min="2"
                max="120"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(errors.age)}
                aria-describedby={errors.age ? getFieldErrorId("age") : undefined}
              />
            </Field>

            <fieldset>
              <legend className="text-sm font-bold text-ink">{t.gender}</legend>
              <div className="mt-2 grid min-w-0 grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-1.5">
                {(["optional", "male", "female"] as Gender[]).map((item) => (
                  <label
                    key={item}
                    className={`flex h-11 min-w-0 cursor-pointer items-center justify-center rounded-xl border px-2 text-center text-[0.82rem] font-black capitalize leading-none transition ${
                      gender === item
                        ? "border-teal-600 bg-white text-teal-950 shadow-line"
                        : "border-transparent text-muted hover:bg-white/70 hover:text-ink"
                    }`}
                  >
                    <input
                      className="sr-only"
                      type="radio"
                      name="gender"
                      value={item}
                      checked={gender === item}
                      onChange={() => setGender(item)}
                    />
                    {item === "optional" ? t.optional : item === "male" ? t.male : t.female}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {unit === "metric" ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.height} name="heightCm" suffix="cm" error={errors.heightCm}>
                <input
                  id="heightCm"
                  name="heightCm"
                  type="number"
                  inputMode="decimal"
                  min="60"
                  max="250"
                  value={heightCm}
                  onChange={(event) => setHeightCm(event.target.value)}
                  className={inputClass}
                  aria-invalid={Boolean(errors.heightCm)}
                  aria-describedby={errors.heightCm ? getFieldErrorId("heightCm") : undefined}
                />
              </Field>
              <Field label={t.weight} name="weightKg" suffix="kg" error={errors.weightKg}>
                <input
                  id="weightKg"
                  name="weightKg"
                  type="number"
                  inputMode="decimal"
                  min="10"
                  max="300"
                  value={weightKg}
                  onChange={(event) => setWeightKg(event.target.value)}
                  className={inputClass}
                  aria-invalid={Boolean(errors.weightKg)}
                  aria-describedby={errors.weightKg ? getFieldErrorId("weightKg") : undefined}
                />
              </Field>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label={t.feet} name="feet" error={errors.feet}>
                <input
                  id="feet"
                  name="feet"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="8"
                  value={feet}
                  onChange={(event) => setFeet(event.target.value)}
                  className={inputClass}
                  aria-invalid={Boolean(errors.feet)}
                  aria-describedby={errors.feet ? getFieldErrorId("feet") : undefined}
                />
              </Field>
              <Field label={t.inches} name="inches" error={errors.inches ?? errors.height}>
                <input
                  id="inches"
                  name="inches"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="11"
                  value={inches}
                  onChange={(event) => setInches(event.target.value)}
                  className={inputClass}
                  aria-invalid={Boolean(errors.inches ?? errors.height)}
                  aria-describedby={
                    errors.inches || errors.height ? getFieldErrorId("inches") : undefined
                  }
                />
              </Field>
              <Field label={t.weight} name="weightLb" suffix="lb" error={errors.weightLb}>
                <input
                  id="weightLb"
                  name="weightLb"
                  type="number"
                  inputMode="decimal"
                  min="22"
                  max="660"
                  value={weightLb}
                  onChange={(event) => setWeightLb(event.target.value)}
                  className={inputClass}
                  aria-invalid={Boolean(errors.weightLb)}
                  aria-describedby={errors.weightLb ? getFieldErrorId("weightLb") : undefined}
                />
              </Field>
            </div>
          )}

          <div aria-live="assertive" className={hasAnyError ? "rounded-xl bg-rose-50 p-3" : ""}>
            {hasAnyError ? (
              <p className="text-sm font-semibold text-rose-800">
                {t.fixFields}
              </p>
            ) : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button
              type="submit"
              className="min-h-[3.25rem] rounded-2xl bg-teal-700 px-5 py-3.5 text-base font-black text-white shadow-line transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {t.calculate}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="min-h-[3.25rem] rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-base font-black text-ink transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {t.reset}
            </button>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!result}
              className="min-h-[3.25rem] rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-base font-black text-ink transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {t.copy}
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!result}
              className="min-h-[3.25rem] rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-base font-black text-ink transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {t.save}
            </button>
          </div>

          <p className="min-h-6 text-sm font-semibold text-muted" aria-live="polite">
            {status}
          </p>
        </form>
      </section>

      <BMIResult result={result} locale={locale} />
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  suffix?: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, name, suffix, error, children }: FieldProps) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="flex items-center justify-between text-sm font-bold text-ink">
        <span>{label}</span>
        {suffix ? <span className="text-xs uppercase tracking-[0.08em] text-muted">{suffix}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={getFieldErrorId(name)} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
