import { expect, test } from "@playwright/test";
import { BMICalculatorPage } from "./pages/BMICalculatorPage";

test.describe("BMI calculator — validation edge cases", () => {
  test("zero and negative values trigger aria-invalid on metric fields", async ({ page }) => {
    const calc = new BMICalculatorPage(page);
    await calc.goto("/");

    await calc.fillMetric("0", "0", "30");
    await calc.submit.click();

    await calc.expectInvalidField("heightCm");
    await calc.expectInvalidField("weightKg");
  });

  test("empty required fields are rejected with aria-invalid", async ({ page }) => {
    const calc = new BMICalculatorPage(page);
    await calc.goto("/");

    await calc.heightCm.fill("");
    await calc.weightKg.fill("");
    await calc.submit.click();

    await calc.expectInvalidField("heightCm");
    await calc.expectInvalidField("weightKg");
  });

  test("US units: feet+inches BMI matches metric within rounding", async ({ page }) => {
    const calc = new BMICalculatorPage(page);
    await calc.goto("/");

    await calc.fillMetric("175", "70");
    await calc.submit.click();
    const metricBmi = await page.locator("body").innerText();
    const matchMetric = metricBmi.match(/(\d{2}\.\d)/);
    expect(matchMetric).not.toBeNull();
    const metricValue = Number(matchMetric![1]);

    await calc.switchToUSUnits();
    await calc.fillUS("5", "9", "154");
    await calc.submit.click();
    const usBmi = await page.locator("body").innerText();
    const matchUs = usBmi.match(/(\d{2}\.\d)/);
    expect(matchUs).not.toBeNull();
    const usValue = Number(matchUs![1]);

    expect(Math.abs(metricValue - usValue)).toBeLessThan(0.5);
  });
});

test.describe("Article JSON-LD", () => {
  test("blog article page renders without runtime errors and includes article content", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const response = await page.goto("/blog/what-is-a-healthy-bmi");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toContainText(/healthy bmi/i);
    expect(errors).toEqual([]);
  });
});
