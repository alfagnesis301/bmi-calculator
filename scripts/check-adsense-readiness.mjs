import { assert, fetchText, startNextServer } from "./audit-utils.mjs";

const server = startNextServer(4011);
const failures = [];

try {
  await server.ready();
  const origin = server.baseUrl;
  const pages = ["/", "/es", "/health-calculators", "/es/health-calculators", "/blog", "/es/blog"];

  for (const path of pages) {
    const { res, text } = await fetchText(`${origin}${path}`, { redirect: "manual" });
    assert(res.status === 200, `${path} returned ${res.status}`, failures);
    if (process.env.NEXT_PUBLIC_ADSENSE_ENABLED !== "true") {
      assert(!/Advertisement/i.test(text), `${path} renders an Advertisement label while ads are disabled`, failures);
      assert(!/adsbygoogle/i.test(text), `${path} renders an adsbygoogle slot while ads are disabled`, failures);
      assert(!/pagead\/js\/adsbygoogle/i.test(text), `${path} loads AdSense script while ads are disabled`, failures);
    }
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
