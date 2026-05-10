import {
  assert,
  extractUrlsFromSitemap,
  fetchText,
  startNextServer,
  stripHtml,
  wordCount
} from "./audit-utils.mjs";

const server = startNextServer(4013);
const failures = [];

const forbiddenSpanishPhrases = [
  /This calculator is/i,
  /Health disclaimer/i,
  /Read article/i,
  /Open calculator/i,
  /Calculate My/i,
  /Calculate your/i,
  /Which calculator should I use/i,
  /Medical disclaimer/i,
  /Related guides/i,
  /Related tools/i,
  /Free Health Calculators/i
];

const accentChecks = [
  [/\bQue calculadora deberias usar\b/i, "Qué calculadora deberías usar"],
  [/\bcategoria(s)?\b/i, "categoría"],
  [/\bcalculos\b/i, "cálculos"],
  [/\bperdida\b/i, "pérdida"],
  [/\borientacion\b/i, "orientación"],
  [/\bformula(s)?\b/i, "fórmula"],
  [/\butil(es)?\b/i, "útil"],
  [/\bninos\b/i, "niños"],
  [/\bcomposicion\b/i, "composición"]
];

const comparablePairs = [
  ["/bmi-guide", "/es/bmi-guide"],
  ["/bmi-categories", "/es/bmi-categories"],
  ["/bmi-formula", "/es/bmi-formula"],
  ["/healthy-bmi-range", "/es/healthy-bmi-range"],
  ["/bmi-chart", "/es/bmi-chart"],
  ["/health-calculators", "/es/health-calculators"],
  ["/ideal-weight-calculator", "/es/ideal-weight-calculator"],
  ["/bmr-calculator", "/es/bmr-calculator"],
  ["/calorie-calculator", "/es/calorie-calculator"],
  ["/body-fat-calculator", "/es/body-fat-calculator"],
  ["/about", "/es/about"],
  ["/editorial-policy", "/es/editorial-policy"],
  ["/privacy-policy", "/es/privacy-policy"],
  ["/terms", "/es/terms"],
  ["/contact", "/es/contact"]
];

try {
  await server.ready();
  const origin = server.baseUrl;
  const { text: sitemap } = await fetchText(`${origin}/sitemap.xml`);
  const paths = extractUrlsFromSitemap(sitemap).map((url) => new URL(url).pathname || "/");
  const spanishPaths = paths.filter((path) => path === "/es" || path.startsWith("/es/"));

  for (const path of spanishPaths) {
    const { res, text } = await fetchText(`${origin}${path}`, { redirect: "manual" });
    assert(res.status === 200, `${path} returned ${res.status}`, failures);
    const visible = stripHtml(text);
    assert(!/[ÃÂ�]/.test(visible), `${path} appears to contain mojibake characters`, failures);
    for (const pattern of forbiddenSpanishPhrases) {
      assert(!pattern.test(visible), `${path} contains untranslated English phrase: ${pattern}`, failures);
    }
    for (const [pattern, expected] of accentChecks) {
      assert(!pattern.test(visible), `${path} may be missing Spanish accents; expected ${expected}`, failures);
    }
  }

  for (const [enPath, esPath] of comparablePairs) {
    const [{ res: enRes, text: enHtml }, { res: esRes, text: esHtml }] = await Promise.all([
      fetchText(`${origin}${enPath}`, { redirect: "manual" }),
      fetchText(`${origin}${esPath}`, { redirect: "manual" })
    ]);
    assert(enRes.status === 200, `${enPath} returned ${enRes.status}`, failures);
    assert(esRes.status === 200, `${esPath} returned ${esRes.status}`, failures);
    if (enRes.status !== 200 || esRes.status !== 200) continue;
    const enWords = wordCount(enHtml);
    const esWords = wordCount(esHtml);
    assert(esWords >= Math.floor(enWords * 0.55), `${esPath} is much shorter than ${enPath}: ${esWords} vs ${enWords} words`, failures);
  }
} finally {
  server.stop();
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("i18n audit passed.");
