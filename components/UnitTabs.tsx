"use client";

import type { UnitSystem } from "@/types/bmi";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

type UnitTabsProps = {
  activeUnit: UnitSystem;
  onChange: (unit: UnitSystem) => void;
  locale?: Locale;
};

export function UnitTabs({ activeUnit, onChange, locale = "en" }: UnitTabsProps) {
  const t = getDictionary(locale).calculator;
  const tabs: Array<{ id: UnitSystem; label: string }> = [
    { id: "metric", label: t.metricUnits },
    { id: "us", label: t.usUnits }
  ];

  return (
    <div
      className="grid grid-cols-2 rounded-full bg-slate-100 p-1"
      role="tablist"
      aria-label={t.chooseUnits}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeUnit === tab.id}
          className={`rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
            activeUnit === tab.id
              ? "bg-white text-ink shadow-line"
              : "text-muted hover:text-ink"
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
