#!/usr/bin/env node
/**
 * Renders X-style tweet cards as PNG screenshots.
 * Reads/writes assets/tweets/tweets.json.
 *
 * Usage:
 *   pnpm render:tweets
 *   pnpm render:tweets --sample   # render Marc Lou fixture for visual QA
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TWEETS_PATH = join(ROOT, "assets/tweets/tweets.json");
const OUT_DIR = join(ROOT, "assets/tweets");
const TEMPLATE_PATH = join(ROOT, "scripts/tweet-card-template.html");
const ENV_PATH = join(process.env.HOME || "", ".config/x-api/.env");

const VERIFIED = new Set([
  "mntruell",
  "leerob",
  "cursor_ai",
  "elonmusk",
  "marclou",
  "bridgemindai",
]);

const TIMES = {
  "2056418797473640681": "May 18",
  "2056780569380626686": "May 19",
  "2058425544652521977": "May 24",
  "2058441059404030246": "May 24",
  "2058396434538324392": "May 24",
  "2058463275587866689": "May 24",
};

const SAMPLE_TWEET = {
  id: "sample-marclou",
  handle: "@marclou",
  name: "Marc Lou",
  text:
    "Composer 2.5 fixed my ADHD coding.\n\nIt's so fast, I don't have time to do something else.\n\nAnd it's good enough for most tasks, so it's my new default now.",
  likes: 3200,
  retweets: 108,
  replies: 201,
  views: 139000,
  verified: true,
  time: "May 21",
};

function slug(handle, id) {
  const user = handle.replace("@", "");
  return `${user}-${id.slice(-6)}.png`;
}

function stripEmoji(text) {
  return text.replace(/\p{Extended_Pictographic}/gu, "").trimEnd();
}

function fmt(n) {
  const value = Number(n) || 0;
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return String(value);
}

function fmtMetric(n) {
  const value = Number(n) || 0;
  return value > 0 ? fmt(value) : "";
}

async function loadXToken() {
  try {
    const raw = await readFile(ENV_PATH, "utf8");
    const match = raw.match(/X_BEARER_TOKEN=(.+)/);
    return match?.[1]?.trim() || null;
  } catch {
    return null;
  }
}

async function fetchAvatar(username, token) {
  if (!token) return null;
  const res = await fetch(
    `https://api.x.com/2/users/by/username/${username}?user.fields=profile_image_url`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) return null;
  const json = await res.json();
  const url =
    json.data?.profile_image_url?.replace("_normal", "_400x400") || null;
  if (!url) return null;

  try {
    const imgRes = await fetch(url);
    if (!imgRes.ok) return null;
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const mime = imgRes.headers.get("content-type") || "image/jpeg";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

function buildPayload(tweet) {
  const username = tweet.handle.replace("@", "");
  const likes = tweet.likes || 0;
  const retweets = tweet.retweets || 0;
  const replies = tweet.replies ?? 0;
  const views = tweet.views ?? 0;

  return {
    name: tweet.name,
    handle: tweet.handle,
    text: stripEmoji(tweet.text),
    likes: fmtMetric(likes),
    retweets: fmtMetric(retweets),
    replies: fmtMetric(replies),
    views: fmtMetric(views),
    time: tweet.time || TIMES[tweet.id] || "May 2026",
    verified: tweet.verified ?? VERIFIED.has(username),
    avatarDataUrl: tweet.avatarDataUrl ?? null,
    initial: (tweet.name || "?").charAt(0).toUpperCase(),
    hasLikes: likes > 0,
    hasRetweets: retweets > 0,
  };
}

async function renderTweet(page, template, tweet) {
  const payload = buildPayload(tweet);

  await page.setContent(template, { waitUntil: "domcontentloaded" });
  await page.evaluate((data) => {
    const avatarRoot = document.getElementById("avatar");
    avatarRoot.replaceChildren();
    if (data.avatarDataUrl) {
      const img = document.createElement("img");
      img.className = "avatar";
      img.src = data.avatarDataUrl;
      avatarRoot.appendChild(img);
    } else {
      const div = document.createElement("div");
      div.className = "avatar avatar-fallback";
      div.textContent = data.initial;
      avatarRoot.appendChild(div);
    }

    document.getElementById("name").textContent = data.name;
    document.getElementById("handle").textContent = data.handle;
    document.getElementById("time").textContent = data.time;
    document.getElementById("text").textContent = data.text;
    document.getElementById("replies").textContent = data.replies;
    document.getElementById("retweets").textContent = data.retweets;
    document.getElementById("likes").textContent = data.likes;
    document.getElementById("views").textContent = data.views;

    document.getElementById("verified").replaceChildren();
    if (data.verified) {
      const badge = document.createElement("span");
      badge.innerHTML =
        '<svg class="verified" viewBox="0 0 22 22" aria-hidden="true"><path fill="#1d9bf0" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.085-1.245-1.44S11.647 4.02 11 4c-.646.018-1.273.213-1.813.568-.54.354-1.032.852-1.306 1.439-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.752 1.053-.883 1.687-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.131.634.438 1.218.883 1.687.47.445 1.055.751 1.69.883.635.13 1.292.082 1.902-.143.274.586.705 1.084 1.306 1.438.54.355 1.167.551 1.813.568.647-.017 1.276-.213 1.817-.568.54-.354 1.028-.852 1.302-1.439.608.223 1.267.272 1.902.142.635-.132 1.22-.437 1.69-.882.445-.47.751-1.053.882-1.687.13-.633.079-1.29-.144-1.896.587-.274 1.087-.705 1.443-1.245.357-.54.555-1.17.573-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/></svg>';
      document.getElementById("verified").appendChild(badge.firstChild);
    }

    document.getElementById("action-repost").classList.toggle("is-repost", data.hasRetweets);
    document.getElementById("action-like").classList.toggle("is-like", data.hasLikes);
  }, payload);

  return page.locator(".tweet").screenshot({
    type: "png",
    animations: "disabled",
    timeout: 10_000,
  });
}

async function main() {
  const sampleMode = process.argv.includes("--sample");
  const tweets = sampleMode
    ? [SAMPLE_TWEET]
    : JSON.parse(await readFile(TWEETS_PATH, "utf8"));
  const template = await readFile(TEMPLATE_PATH, "utf8");
  const token = await loadXToken();

  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 600, height: 1200 },
    deviceScaleFactor: 2,
  });
  const avatarCache = new Map();

  try {
    for (const tweet of tweets) {
      const username = tweet.handle.replace("@", "");
      let avatarDataUrl = avatarCache.get(username);
      if (avatarDataUrl === undefined) {
        avatarDataUrl = await fetchAvatar(username, token);
        avatarCache.set(username, avatarDataUrl);
      }

      const filename = sampleMode
        ? "sample-marclou.png"
        : slug(tweet.handle, tweet.id);
      const outPath = join(OUT_DIR, filename);
      const png = await renderTweet(page, template, {
        ...tweet,
        avatarDataUrl,
      });
      await writeFile(outPath, png);

      if (!sampleMode) {
        tweet.screenshot = `assets/tweets/${filename}`;
      }
      console.log(`✓ ${filename}`);
    }
  } finally {
    await page.close();
    await browser.close();
  }

  if (!sampleMode) {
    await writeFile(TWEETS_PATH, JSON.stringify(tweets, null, 2) + "\n", "utf8");
    console.log(`\nUpdated ${TWEETS_PATH}`);
    console.log("If you changed tweet order, update SocialGrid paths in slides.md.");
  } else {
    console.log(`\nSample → ${join(OUT_DIR, "sample-marclou.png")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
