import { spawn } from "node:child_process";
import { join } from "node:path";

export const REQUIRED_ROUTES = [
  "/",
  "/es",
  "/bmi-guide",
  "/bmi-categories",
  "/bmi-formula",
  "/healthy-bmi-range",
  "/bmi-chart",
  "/health-calculators",
  "/ideal-weight-calculator",
  "/bmr-calculator",
  "/calorie-calculator",
  "/body-fat-calculator",
  "/blog",
  "/about",
  "/editorial-policy",
  "/privacy-policy",
  "/terms",
  "/contact",
  "/es/bmi-categories",
  "/es/bmi-formula",
  "/es/healthy-bmi-range",
  "/es/bmi-chart",
  "/es/health-calculators",
  "/es/ideal-weight-calculator",
  "/es/bmr-calculator",
  "/es/calorie-calculator",
  "/es/body-fat-calculator",
  "/es/blog",
  "/es/about",
  "/es/editorial-policy",
  "/es/privacy-policy",
  "/es/terms",
  "/es/contact"
];

export function startNextServer(port = 4010) {
  const env = normalizeEnv({
    ...process.env,
    NEXT_PUBLIC_ADSENSE_ENABLED: process.env.NEXT_PUBLIC_ADSENSE_ENABLED ?? "false"
  });
  const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  const child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: process.cwd(),
    env,
    stdio: ["ignore", "pipe", "pipe"]
  });

  let output = "";
  child.stdout.on("data", (chunk) => { output += chunk.toString(); });
  child.stderr.on("data", (chunk) => { output += chunk.toString(); });

  return {
    baseUrl: `http://127.0.0.1:${port}`,
    stop: () => {
      if (!child.killed) child.kill();
    },
    ready: async () => {
      const deadline = Date.now() + 30000;
      while (Date.now() < deadline) {
        try {
          const res = await fetch(`http://127.0.0.1:${port}/`, { redirect: "manual" });
          if (res.status === 200) return;
        } catch {}
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      throw new Error(`Next server did not become ready. Output:\n${output}`);
    }
  };
}

function normalizeEnv(input) {
  if (process.platform !== "win32") return input;

  const output = {};
  const seen = new Set();
  for (const [key, value] of Object.entries(input)) {
    const lower = key.toLowerCase();
    if (seen.has(lower)) continue;
    seen.add(lower);
    output[key] = value;
  }
  return output;
}

export async function fetchText(url, init = {}) {
  const res = await fetch(url, init);
  const text = await res.text();
  return { res, text };
}

export function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function wordCount(html) {
  const text = stripHtml(html);
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}

export function extractUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

export function extractInternalLinks(html, origin) {
  const links = new Set();
  for (const match of html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:") ||
      href.startsWith("/_next/") ||
      href.startsWith("/icon") ||
      href.startsWith("/apple-icon")
    ) {
      continue;
    }
    try {
      const url = new URL(href, origin);
      if (url.origin === origin) links.add(url.pathname);
    } catch {}
  }
  return [...links];
}

export function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}
