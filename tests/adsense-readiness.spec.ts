import { expect, test } from "@playwright/test";

test("home pages load without ad placeholders when ads are disabled", async ({ page }) => {
  const adLabelPattern = new RegExp(`\\b${"Advert"}${"isement"}\\b`);
  for (const path of ["/", "/es"]) {
    await page.goto(path);
    await expect(page.locator("body")).not.toContainText(adLabelPattern);
    await expect(page.locator("ins.adsbygoogle")).toHaveCount(0);
  }
});

test("Spanish pages do not expose common English UI leftovers", async ({ page }) => {
  await page.goto("/es");
  await expect(page.locator("body")).not.toContainText("This calculator is");
  await expect(page.locator("body")).not.toContainText("Health disclaimer");
  await expect(page.locator("body")).not.toContainText("Open calculator");
  await expect(page.locator("body")).not.toContainText("Read article");
});

test("BMI calculator works on English and Spanish home pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Calculate My BMI/i }).click();
  await expect(page.locator("body")).toContainText("Your BMI");
  await expect(page.locator("body")).toContainText("Category");

  await page.goto("/es");
  await page.getByRole("button", { name: /Calcular IMC/i }).click();
  await expect(page.locator("body")).toContainText("Tu IMC");
  await expect(page.locator("body")).toContainText("Categoría");
});

test("calculator pages render expected controls in both languages", async ({ page }) => {
  const pages = [
    ["/bmr-calculator", /Calculate BMR/i],
    ["/es/bmr-calculator", /Calcular TMB/i],
    ["/calorie-calculator", /Calculate Calories/i],
    ["/es/calorie-calculator", /Calcular calorías/i],
    ["/ideal-weight-calculator", /Calculate Ideal Weight/i],
    ["/es/ideal-weight-calculator", /Calcular peso ideal/i],
    ["/body-fat-calculator", /Calculate Body Fat/i],
    ["/es/body-fat-calculator", /Calcular grasa corporal/i]
  ] as const;

  for (const [path, buttonName] of pages) {
    await page.goto(path);
    await expect(page.getByRole("button", { name: buttonName })).toBeVisible();
  }
});

test("body fat calculator exposes hip input for female mode", async ({ page }) => {
  await page.goto("/body-fat-calculator");
  await expect(page.getByLabel(/Hip/i)).toHaveCount(0);
  await page.getByRole("button", { name: /Calculate Body Fat/i }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("%");

  await page.getByText("Female", { exact: true }).click();
  await expect(page.getByLabel(/Hip/i)).toBeVisible();
  await page.getByRole("button", { name: /Calculate Body Fat/i }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("%");

  await page.goto("/es/body-fat-calculator");
  await expect(page.getByLabel(/Cadera/i)).toHaveCount(0);
  await page.getByRole("button", { name: /Calcular grasa corporal/i }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("%");

  await page.getByText("Femenino", { exact: true }).click();
  await expect(page.getByLabel(/Cadera/i)).toBeVisible();
  await page.getByRole("button", { name: /Calcular grasa corporal/i }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("%");
});

test("main navigation and footer links on EN and ES home pages return 200", async ({ page, request }) => {
  for (const path of ["/", "/es"]) {
    await page.goto(path);
    const links = await page.locator("header a, footer a").evaluateAll((anchors) =>
      Array.from(new Set(anchors.map((a) => (a as HTMLAnchorElement).href)))
    );
    for (const href of links) {
      const url = new URL(href);
      if (url.origin !== "http://127.0.0.1:4014") continue;
      const response = await request.get(url.pathname);
      expect(response.status(), `${path} link ${url.pathname}`).toBe(200);
    }
  }
});

test("all sitemap URLs return 200", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => new URL(match[1]).pathname || "/");
  for (const path of urls) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});

test("pages do not emit critical console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const path of ["/", "/es", "/bmr-calculator", "/es/body-fat-calculator"]) {
    await page.goto(path);
  }
  expect(errors).toEqual([]);
});
