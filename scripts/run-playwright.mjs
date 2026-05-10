import { spawn } from "node:child_process";
import { join } from "node:path";
import { startNextServer } from "./audit-utils.mjs";

const port = 4014;
const server = startNextServer(port);

function run(command, args, env) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: normalizeEnv(env),
      stdio: "inherit",
      shell: false
    });
    child.on("exit", (code) => resolve(code ?? 1));
  });
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

try {
  await server.ready();
  const code = await run(process.execPath, [join(process.cwd(), "node_modules", "@playwright", "test", "cli.js"), "test"], {
    ...process.env,
    PLAYWRIGHT_BASE_URL: server.baseUrl,
    NEXT_PUBLIC_ADSENSE_ENABLED: "false"
  });
  process.exitCode = code;
} finally {
  server.stop();
}
