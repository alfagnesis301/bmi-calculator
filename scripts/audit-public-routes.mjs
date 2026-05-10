import {
  REQUIRED_ROUTES,
  assert,
  extractInternalLinks,
  extractUrlsFromSitemap,
  fetchText,
  startNextServer,
  stripHtml,
  wordCount
} from "./audit-utils.mjs";

const server = startNextServer(4010);
const failures = [];
const legalOrUtility = new Set(["/contact", "/es/contact", "/privacy-policy", "/es/privacy-policy", "/terms", "/es/terms"]);
const forbiddenText = [/\bTODO\b/, /coming soon/i, /lorem ipsum/i, /placeholder/i];

try {
  await server.ready();
  const origin = server.baseUrl;
  const { text: sitemap } = await fetchText(`${origin}/sitemap.xml`);
  const { text: robots } = await fetchText(`${origin}/robots.txt`);
  const sitemapPaths = extractUrlsFromSitemap(sitemap).map((url) => new URL(url).pathname || "/");
  const routeSet = new Set([...sitemapPaths, ...REQUIRED_ROUTES]);

  assert(sitemap.includes("https://bmichecks.com"), "sitemap should use canonical https://bmichecks.com URLs", failures);
  assert(!sitemap.includes("http://bmichecks.com"), "sitemap must not include http:// URLs", failures);
  assert(!sitemap.includes("www.bmichecks.com"), "sitemap must not include www URLs", failures);
  assert(robots.includes("Allow: /"), "robots.txt must allow root", failures);
  assert(robots.includes("Mediapartners-Google"), "robots.txt should explicitly allow Mediapartners-Google", failures);

  const checkedLinks = new Set();
  for (const path of routeSet) {
    const { res, text } = await fetchText(`${origin}${path}`, { redirect: "manual" });
    assert(res.status === 200, `${path} returned ${res.status}, expected 200`, failures);
    if (res.status !== 200) continue;

    assert(/<title>[^<]{10,}<\/title>/i.test(text), `${path} is missing a useful title`, failures);
    assert(/<meta name="description" content="[^"]{50,}"/i.test(text), `${path} is missing a useful meta description`, failures);
    assert(!/noindex/i.test(text), `${path} is noindex but appears in public route audit`, failures);

    const minWords = legalOrUtility.has(path) ? 60 : 180;
    assert(wordCount(text) >= minWords, `${path} looks thin: ${wordCount(text)} words`, failures);

    const visibleText = stripHtml(text);
    for (const pattern of forbiddenText) {
      assert(!pattern.test(visibleText), `${path} contains forbidden placeholder text: ${pattern}`, failures);
    }

    for (const link of extractInternalLinks(text, origin)) {
      checkedLinks.add(link);
    }
  }

  for (const link of checkedLinks) {
    const { res } = await fetchText(`${origin}${link}`, { redirect: "manual" });
    assert(res.status === 200, `Internal link ${link} returned ${res.status}, expected 200`, failures);
  }
} finally {
  server.stop();
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Public route audit passed.");
