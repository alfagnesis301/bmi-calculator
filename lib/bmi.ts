import type {
  BMICategory,
  BMIInput,
  HealthyWeightRange,
  ValidationResult
} from "@/types/bmi";

const BMI_MIN_NORMAL = 18.5;
const BMI_MAX_NORMAL = 24.9;

const categories: BMICategory[] = [
  {
    key: "underweight",
    label: "Underweight",
    range: "Below 18.5",
    description:
      "Your BMI is below the adult healthy-weight range. This can be worth discussing with a qualified healthcare provider, especially if it is unexpected.",
    accentClass: "border-sky-300 bg-sky-50 text-sky-900"
  },
  {
    key: "normal",
    label: "Normal weight",
    range: "18.5 - 24.9",
    description:
      "Your BMI is within the commonly used adult healthy-weight range. BMI is still only one screening measure, so consider it alongside your wider health context.",
    accentClass: "border-teal-300 bg-teal-50 text-teal-950"
  },
  {
    key: "overweight",
    label: "Overweight",
    range: "25.0 - 29.9",
    description:
      "Your BMI is above the adult healthy-weight range. BMI does not diagnose health, but it can be a prompt to review habits or speak with a healthcare professional.",
    accentClass: "border-orange-300 bg-orange-50 text-orange-950"
  },
  {
    key: "obesity",
    label: "Obesity",
    range: "30.0 and above",
    description:
      "Your BMI is in the adult obesity range. This result is not a diagnosis, but a healthcare provider can help interpret it with other measurements and personal factors.",
    accentClass: "border-rose-300 bg-rose-50 text-rose-950"
  }
];

export function calculateMetricBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function calculateUSBMI(weightLb: number, feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return (703 * weightLb) / (totalInches * totalInches);
}

export function roundBMI(value: number): number {
  return Math.round(value * 10) / 10;
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return categories[0];
  if (bmi < 25) return categories[1];
  if (bmi < 30) return categories[2];
  return categories[3];
}

export function getHealthyWeightRangeMetric(heightCm: number): HealthyWeightRange {
  const heightM = heightCm / 100;
  return {
    min: roundToOne(BMI_MIN_NORMAL * heightM * heightM),
    max: roundToOne(BMI_MAX_NORMAL * heightM * heightM),
    unit: "kg"
  };
}

export function getHealthyWeightRangeUS(feet: number, inches: number): HealthyWeightRange {
  const totalInches = feet * 12 + inches;
  return {
    min: Math.round((BMI_MIN_NORMAL * totalInches * totalInches) / 703),
    max: Math.round((BMI_MAX_NORMAL * totalInches * totalInches) / 703),
    unit: "lb"
  };
}

export function validateBMIInput(data: BMIInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!Number.isFinite(data.age) || data.age < 2 || data.age > 120) {
    errors.age = "Enter an age between 2 and 120.";
  }

  if (data.unit === "metric") {
    if (!Number.isFinite(data.heightCm) || data.heightCm < 60 || data.heightCm > 250) {
      errors.heightCm = "Enter a height between 60 cm and 250 cm.";
    }

    if (!Number.isFinite(data.weightKg) || data.weightKg < 10 || data.weightKg > 300) {
      errors.weightKg = "Enter a weight between 10 kg and 300 kg.";
    }
  } else {
    const totalInches = data.feet * 12 + data.inches;

    if (!Number.isFinite(data.feet) || data.feet < 1 || data.feet > 8) {
      errors.feet = "Enter feet between 1 and 8.";
    }

    if (!Number.isFinite(data.inches) || data.inches < 0 || data.inches > 11) {
      errors.inches = "Enter inches between 0 and 11.";
    }

    if (!Number.isFinite(totalInches) || totalInches < 24 || totalInches > 96) {
      errors.height = "Enter a total height between 24 and 96 inches.";
    }

    if (!Number.isFinite(data.weightLb) || data.weightLb < 22 || data.weightLb > 660) {
      errors.weightLb = "Enter a weight between 22 lb and 660 lb.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export function formatHealthyRange(range: HealthyWeightRange): string {
  return `${range.min} - ${range.max} ${range.unit}`;
}

export function getBMIPositionPercent(bmi: number): number {
  const min = 12;
  const max = 42;
  const bounded = Math.max(min, Math.min(max, bmi));
  return ((bounded - min) / (max - min)) * 100;
}

function roundToOne(value: number): number {
  return Math.round(value * 10) / 10;
}
