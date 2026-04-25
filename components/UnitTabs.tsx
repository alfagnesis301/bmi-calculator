"use client";

import type { UnitSystem } from "@/types/bmi";

type UnitTabsProps = {
  activeUnit: UnitSystem;
  onChange: (unit: UnitSystem) => void;
};

const tabs: Array<{ id: UnitSystem; label: string }> = [
  { id: "metric", label: "Metric Units" },
  { id: "us", label: "US Units" }
];

export function UnitTabs({ activeUnit, onChange }: UnitTabsProps) {
  return (
    <div
      className="grid grid-cols-2 rounded-full bg-slate-100 p-1"
      role="tablist"
      aria-label="Choose measurement units"
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
