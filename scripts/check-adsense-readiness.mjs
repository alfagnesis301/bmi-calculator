import {
  assert,
  extractUrlsFromSitemap,
  fetchText,
  startNextServer,
  stripHtml,
  wordCount
} from "./audit-utils.mjs";

const server = startNextServer(4011);
const failures = [];
const adLabelPattern = new RegExp(`\\b${"Advert"}${"isement"}\\b`);

try {
  await server.ready();
  const origin = server.baseUrl;
  const { text: sitemap } = await fetchText(`${origin}/sitemap.xml`);
  const pages = extractUrlsFromSitemap(sitemap).map((url) => new URL(url).pathname || "/");

  for (const path of pages) {
    const { res, text } = await fetchText(`${origin}${path}`, { redirect: "manual" });
    assert(res.status === 200, `${path} returned ${res.status}`, failures);
    assert(!/noindex/i.test(text), `${path} is noindex but appears in sitemap`, failures);
    if (process.env.NEXT_PUBLIC_ADSENSE_ENABLED !== "true") {
      assert(!adLabelPattern.test(stripHtml(text)), `${path} renders an ad label while ads are disabled`, failures);
      assert(!/adsbygoogle/i.test(text), `${path} renders an adsbygoogle slot while ads are disabled`, failures);
      assert(!/pagead\/js\/adsbygoogle/i.test(text), `${path} loads AdSense script while ads are disabled`, failures);
    }
    const visibleText = stripHtml(text);
    assert(!/\bTODO\b/.test(visibleText), `${path} contains unfinished TODO text`, failures);
    assert(!/\b(coming soon|lorem ipsum)\b/i.test(visibleText), `${path} contains unfinished draft text`, failures);
    assert(!/placeholder ad/i.test(visibleText), `${path} contains unfinished ad placeholder text`, failures);
    const minWords = /\/(contact|privacy-policy|terms)$/.test(path) ? 60 : 220;
    assert(wordCount(text) >= minWords, `${path} looks thin for AdSense review: ${wordCount(text)} words`, failures);
  }

  const { text: adsTxt } = await fetchText(`${origin}/ads.txt`);
  assert(adsTxt.includes("google.com, pub-7051995204409435, DIRECT, f08c47fec0942fa0"), "ads.txt is missing the Google publisher line", failures);
} finally {
  server.stop();
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("AdSense readiness audit passed.");
