import { Locator, Page, expect } from "@playwright/test";

export class BMICalculatorPage {
  readonly page: Page;
  readonly age: Locator;
  readonly heightCm: Locator;
  readonly weightKg: Locator;
  readonly feet: Locator;
  readonly inches: Locator;
  readonly weightLb: Locator;
  readonly submit: Locator;
  readonly errorRegion: Locator;
  readonly statusRegion: Locator;

  constructor(page: Page, lang: "en" | "es" = "en") {
    this.page = page;
    this.age = page.locator("#age");
    this.heightCm = page.locator("#heightCm");
    this.weightKg = page.locator("#weightKg");
    this.feet = page.locator("#feet");
    this.inches = page.locator("#inches");
    this.weightLb = page.locator("#weightLb");
    const submitName = lang === "es" ? /Calcular IMC/i : /Calculate My BMI/i;
    this.submit = page.getByRole("button", { name: submitName });
    this.errorRegion = page.locator("[aria-live='assertive']");
    this.statusRegion = page.locator("[aria-live='polite']").first();
  }

  async goto(path = "/") {
    await this.page.goto(path);
  }

  async switchToUSUnits() {
    await this.page.getByRole("tab", { name: /US|Imperial/i }).click();
  }

  async fillMetric(heightCm: string, weightKg: string, age = "30") {
    await this.age.fill(age);
    await this.heightCm.fill(heightCm);
    await this.weightKg.fill(weightKg);
  }

  async fillUS(feet: string, inches: string, weightLb: string, age = "30") {
    await this.age.fill(age);
    await this.feet.fill(feet);
    await this.inches.fill(inches);
    await this.weightLb.fill(weightLb);
  }

  async expectInvalidField(fieldId: string) {
    await expect(this.page.locator(`#${fieldId}`)).toHaveAttribute("aria-invalid", "true");
  }
}
