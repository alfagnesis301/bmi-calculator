export function parsePositiveNumber(value: string): number {
  if (value.trim() === "") return Number.NaN;
  return Number(value);
}

export function getFieldErrorId(fieldName: string): string {
  return `${fieldName}-error`;
}
