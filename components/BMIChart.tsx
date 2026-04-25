import { getBMIPositionPercent } from "@/lib/bmi";

type BMIChartProps = {
  bmi?: number;
};

const ranges = [
  { label: "Underweight", color: "bg-sky-500", width: "21.7%" },
  { label: "Normal", color: "bg-teal-500", width: "21.3%" },
  { label: "Overweight", color: "bg-orange-500", width: "16.7%" },
  { label: "Obesity", color: "bg-rose-500", width: "40.3%" }
];

export function BMIChart({ bmi }: BMIChartProps) {
  const position = typeof bmi === "number" ? getBMIPositionPercent(bmi) : undefined;

  return (
    <div className="space-y-3" aria-label="BMI category chart">
      <div className="relative pt-5">
        {position !== undefined ? (
          <div
            className="absolute top-0 z-10 -translate-x-1/2 text-xs font-bold text-ink"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <span className="block rounded-full bg-ink px-2 py-1 text-white">{bmi?.toFixed(1)}</span>
            <span className="mx-auto mt-1 block h-4 w-0.5 bg-ink" />
          </div>
        ) : null}
        <div className="flex h-4 overflow-hidden rounded-full bg-slate-100">
          {ranges.map((range) => (
            <span
              key={range.label}
              className={`${range.color} h-full`}
              style={{ width: range.width }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 text-[0.72rem] font-semibold text-muted">
        <span>&lt;18.5</span>
        <span>18.5-24.9</span>
        <span>25-29.9</span>
        <span>30+</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-muted sm:grid-cols-4">
        {ranges.map((range) => (
          <span key={range.label} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${range.color}`} aria-hidden="true" />
            {range.label}
          </span>
        ))}
      </div>
    </div>
  );
}
