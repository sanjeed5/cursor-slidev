#!/usr/bin/env node
/**
 * Refresh assets/tweets/tweets.json from X search.
 * Requires ~/.config/x-api/.env with X_BEARER_TOKEN
 *
 * Usage: pnpm sync:social
 * Then: pnpm render:tweets
 * Update SocialGrid in slides.md if you reorder which tweets appear on the slide.
 */

import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TWEETS_PATH = join(ROOT, "assets/tweets/tweets.json");
const ENV_PATH = join(process.env.HOME || "", ".config/x-api/.env");

async function loadToken() {
  const raw = await readFile(ENV_PATH, "utf8");
  const match = raw.match(/X_BEARER_TOKEN=(.+)/);
  if (!match) throw new Error("X_BEARER_TOKEN not found in ~/.config/x-api/.env");
  return match[1].trim();
}

async function searchComposer(token) {
  const params = new URLSearchParams({
    query: '(Composer 2.5 OR "composer 2.5") cursor -is:retweet lang:en',
    max_results: "30",
    "tweet.fields": "created_at,public_metrics,author_id,note_tweet",
    expansions: "author_id",
    "user.fields": "username,name,verified",
  });

  const res = await fetch(`https://api.x.com/2/tweets/search/recent?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`X API ${res.status}: ${await res.text()}`);
  return res.json();
}

function toEntry(tweet, users) {
  const user = users[tweet.author_id] || {};
  const metrics = tweet.public_metrics || {};
  return {
    id: tweet.id,
    handle: `@${user.username || "unknown"}`,
    name: user.name || user.username || "Unknown",
    text: (tweet.note_tweet?.text || tweet.text).trim(),
    likes: metrics.like_count ?? 0,
    retweets: metrics.retweet_count ?? 0,
    replies: metrics.reply_count ?? 0,
    views: metrics.impression_count ?? 0,
    verified: user.verified ?? false,
    url: `https://x.com/${user.username || "i"}/status/${tweet.id}`,
    screenshot: null,
  };
}

async function main() {
  const token = await loadToken();
  const existing = JSON.parse(await readFile(TWEETS_PATH, "utf8"));
  const byId = new Map(existing.map((e) => [e.id, e]));

  const data = await searchComposer(token);
  const users = Object.fromEntries(
    (data.includes?.users || []).map((u) => [u.id, u])
  );

  const fresh = (data.data || [])
    .map((t) => toEntry(t, users))
    .sort((a, b) => b.likes - a.likes || b.retweets - a.retweets)
    .slice(0, 8);

  const tweets = fresh.map((entry) => {
    const prev = byId.get(entry.id);
    return prev?.screenshot ? { ...entry, screenshot: prev.screenshot } : entry;
  });

  await writeFile(TWEETS_PATH, JSON.stringify(tweets, null, 2) + "\n", "utf8");
  console.log(`Updated ${tweets.length} tweets in assets/tweets/tweets.json`);
  console.log("Run pnpm render:tweets, then update SocialGrid in slides.md if needed.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
