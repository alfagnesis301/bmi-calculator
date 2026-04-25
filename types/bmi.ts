export type UnitSystem = "metric" | "us";

export type Gender = "male" | "female" | "optional";

export type BMICategoryKey = "underweight" | "normal" | "overweight" | "obesity";

export type BMICategory = {
  key: BMICategoryKey;
  label: string;
  range: string;
  description: string;
  accentClass: string;
};

export type MetricBMIInput = {
  unit: "metric";
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
};

export type USBMIInput = {
  unit: "us";
  age: number;
  gender: Gender;
  feet: number;
  inches: number;
  weightLb: number;
};

export type BMIInput = MetricBMIInput | USBMIInput;

export type HealthyWeightRange = {
  min: number;
  max: number;
  unit: "kg" | "lb";
};

export type BMIResultData = {
  bmi: number;
  category: BMICategory;
  healthyRange: HealthyWeightRange;
  heightLabel: string;
  createdAt: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: Record<string, string>;
};
