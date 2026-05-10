import { assert, fetchText, startNextServer } from "./audit-utils.mjs";

const server = startNextServer(4012);
const failures = [];

try {
  await server.ready();
  const origin = server.baseUrl;
  const pages = [
    ["/", "BMI Calculator"],
    ["/es", "Calculadora"],
    ["/bmr-calculator", "BMR"],
    ["/calorie-calculator", "Calorie"],
    ["/ideal-weight-calculator", "Ideal Weight"],
    ["/body-fat-calculator", "Body Fat"],
    ["/health-calculators", "Free Health Calculators"],
    ["/es/health-calculators", "Calculadoras de salud"]
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
} finally {
  server.stop();
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Smoke tests passed.");
