import { readFileSync } from "node:fs";
import { assert, extractInternalLinks, extractUrlsFromSitemap, fetchText, startNextServer, stripHtml } from "./audit-utils.mjs";

const server = startNextServer(4012);
const failures = [];

try {
  await server.ready();
  const origin = server.baseUrl;
  const pages = [
    ["/", "BMI Calculator"],
    ["/es", "Calculadora"],
    ["/bmr-calculator", "BMR"],
    ["/es/bmr-calculator", "Calculadora de TMB"],
    ["/calorie-calculator", "Calorie"],
    ["/es/calorie-calculator", "Calculadora de calorías"],
    ["/ideal-weight-calculator", "Ideal Weight"],
    ["/es/ideal-weight-calculator", "Calculadora de peso ideal"],
    ["/body-fat-calculator", "Body Fat"],
    ["/es/body-fat-calculator", "Calculadora de grasa corporal"],
    ["/health-calculators", "Free Health Calculators"],
    ["/es/health-calculators", "Calculadoras de salud"],
    ["/es/bmi-guide", "Guía completa del IMC"]
  ];

  for (const [path, needle] of pages) {
    const { res, text } = await fetchText(`${origin}${path}`, { redirect: "manual" });
    assert(res.status === 200, `${path} returned ${res.status}`, failures);
    assert(text.includes(needle), `${path} did not include expected text: ${needle}`, failures);
  }

  const { text: home } = await fetchText(`${origin}/`);
  assert(home.includes('aria-live="polite"'), "BMI result status should remain accessible with aria-live", failures);
  assert(home.includes("Calculate My BMI"), "BMI calculator CTA should be present", failures);
  assert(home.includes("ES"), "Language switcher should include Spanish link", failures);
  assert(!/Advertisement/i.test(stripHtml(home)), "Home should not show Advertisement with ads disabled", failures);

  const { text: spanishHome } = await fetchText(`${origin}/es`);
  assert(!/Advertisement/i.test(stripHtml(spanishHome)), "Spanish home should not show Advertisement with ads disabled", failures);
  assert(!/This calculator is/i.test(stripHtml(spanishHome)), "Spanish home should not include English disclaimer text", failures);

  const { text: bodyFatEs } = await fetchText(`${origin}/es/body-fat-calculator`);
  assert(bodyFatEs.includes("Femenino"), "Spanish body fat calculator should include female option", failures);
  assert(bodyFatEs.includes("Femenino"), "Spanish body fat calculator should expose female mode", failures);
  const bodyFatSource = readFileSync("app/body-fat-calculator/BodyFatCalculator.tsx", "utf8");
  assert(bodyFatSource.includes('id: "hip-bf"'), "Body fat calculator should render a hip input for female mode", failures);
  assert(bodyFatSource.includes('gender === "female"'), "Body fat calculator should conditionally test female measurements", failures);

  const { text: sitemap } = await fetchText(`${origin}/sitemap.xml`);
  for (const url of extractUrlsFromSitemap(sitemap)) {
    const { res } = await fetchText(url.replace("https://bmichecks.com", origin), { redirect: "manual" });
    assert(res.status === 200, `Sitemap URL ${url} returned ${res.status}`, failures);
  }

  for (const path of ["/", "/es"]) {
    const { text } = await fetchText(`${origin}${path}`);
    for (const link of extractInternalLinks(text, origin)) {
      const { res } = await fetchText(`${origin}${link}`, { redirect: "manual" });
      assert(res.status === 200, `${path} internal link ${link} returned ${res.status}`, failures);
    }
  }
} finally {
  server.stop();
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Smoke tests passed.");
