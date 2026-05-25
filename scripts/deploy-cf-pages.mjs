#!/usr/bin/env node
/**
 * Deploy the Slidev deck to Cloudflare Pages via Wrangler.
 *
 * Prerequisites (once):
 *   pnpm cf:login
 *
 * Usage:
 *   pnpm cf:deploy          # after editing slides.md
 */

import { execSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const PROJECT = process.env.CF_PAGES_PROJECT ?? "cursor-slidev";
const DOMAIN = process.env.CF_CUSTOM_DOMAIN ?? "cursor.sanjeed.in";
const BRANCH = process.env.CF_PAGES_BRANCH ?? "main";

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: "inherit", ...opts });
}

function runCapture(cmd) {
  return execSync(cmd, { encoding: "utf8" }).trim();
}

function checkAuth() {
  const result = spawnSync("pnpm", ["exec", "wrangler", "whoami"], { encoding: "utf8" });
  if (result.status === 0 && !result.stderr.includes("Not logged in")) {
    return "wrangler";
  }
  if (process.env.CLOUDFLARE_API_TOKEN) {
    return "token";
  }
  console.error(`
Not authenticated with Cloudflare.

Run once in your terminal:
  pnpm cf:login

Or set CLOUDFLARE_API_TOKEN (Pages Edit + Zone Read for sanjeed.in).
`);
  process.exit(1);
}

function ensureProject() {
  const list = spawnSync("pnpm", ["exec", "wrangler", "pages", "project", "list"], {
    encoding: "utf8",
  });
  if (list.stdout.includes(PROJECT)) {
    console.log(`Pages project "${PROJECT}" already exists.`);
    return;
  }
  console.log(`Creating Pages project "${PROJECT}"…`);
  run(`pnpm exec wrangler pages project create ${PROJECT} --production-branch ${BRANCH}`);
}

function getAccountId() {
  if (process.env.CLOUDFLARE_ACCOUNT_ID) {
    return process.env.CLOUDFLARE_ACCOUNT_ID;
  }
  const out = runCapture("pnpm exec wrangler whoami");
  const match = out.match(/Account ID:\s*([a-f0-9]+)/i);
  if (!match) {
    throw new Error("Could not read Account ID from wrangler whoami. Set CLOUDFLARE_ACCOUNT_ID.");
  }
  return match[1];
}

async function addCustomDomain(accountId) {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    console.log(`
Skipping custom domain API step (no CLOUDFLARE_API_TOKEN).
Add ${DOMAIN} in the dashboard: Pages → ${PROJECT} → Custom domains
Or re-run with a token that has Pages Edit permission.
`);
    return;
  }

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${PROJECT}/domains`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: DOMAIN }),
    },
  );

  const data = await res.json();
  if (data.success) {
    console.log(`Custom domain ${DOMAIN} added (status: ${data.result?.status ?? "pending"}).`);
    return;
  }

  const alreadyExists = data.errors?.some((e) =>
    String(e.message).toLowerCase().includes("already"),
  );
  if (alreadyExists) {
    console.log(`Custom domain ${DOMAIN} is already configured.`);
    return;
  }

  console.warn("Could not add custom domain via API:", JSON.stringify(data.errors ?? data, null, 2));
  console.log(`Add manually: Pages → ${PROJECT} → Custom domains → ${DOMAIN}`);
}

checkAuth();
console.log("Building…");
run("pnpm build");
ensureProject();
console.log("Deploying to Cloudflare Pages…");
run(
  `pnpm exec wrangler pages deploy dist --project-name=${PROJECT} --branch=${BRANCH} --commit-dirty=true`,
);

try {
  const accountId = getAccountId();
  await addCustomDomain(accountId);
} catch (err) {
  console.warn(String(err));
}

console.log(`
Done.

  Audience:    https://${DOMAIN}
  Presenter:   https://${DOMAIN}/presenter
  Pages URL:   https://${PROJECT}.pages.dev
`);
