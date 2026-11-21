/**
 * VisFlix Studio – Puppeteer Prerender Server
 * ============================================
 * Sits in front of your static CRA build (or any reverse-proxy).
 * When a *crawler* (Googlebot, social-media bots, etc.) visits,
 * it spins up Puppeteer, renders the page fully, and returns the
 * complete HTML snapshot. Regular users are served the normal CRA
 * bundle so they still get the full SPA experience.
 *
 * Usage:
 *   1. npm install puppeteer express  (one-time)
 *   2. npm run build                  (build the React app first)
 *   3. node prerender-server.js       (starts on port 3001 by default)
 *
 * In production, put Nginx/Caddy in front and proxy bot traffic to
 * this server while sending human traffic to your CDN / static host.
 *
 * Environment variables:
 *   PORT          – port this server listens on (default 3001)
 *   STATIC_DIR    – path to the CRA build folder (default ./build)
 *   ORIGIN        – the full origin Puppeteer opens (default http://localhost:3001)
 */

const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const STATIC_DIR = process.env.STATIC_DIR || path.join(__dirname, "build");
const ORIGIN = process.env.ORIGIN || `http://localhost:${PORT}`;

// ─── Bot / crawler user-agent patterns ───────────────────────────────────────
const BOT_AGENTS = [
  "googlebot",
  "bingbot",
  "slurp",           // Yahoo
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "sogou",
  "exabot",
  "facebot",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "applebot",
  "semrushbot",
  "ahrefsbot",
  "mj12bot",
  "dotbot",
  "rogerbot",
];

function isBot(userAgent = "") {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some((bot) => ua.includes(bot));
}

// ─── Puppeteer render cache (in-memory, keyed by path) ───────────────────────
const cache = new Map();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

async function renderPage(urlPath) {
  const cacheKey = urlPath;

  if (cache.has(cacheKey)) {
    const { html, timestamp } = cache.get(cacheKey);
    if (Date.now() - timestamp < CACHE_TTL_MS) {
      console.log(`[prerender] cache hit: ${urlPath}`);
      return html;
    }
    cache.delete(cacheKey);
  }

  console.log(`[prerender] rendering: ${urlPath}`);
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Abort image / font / media requests to speed up rendering
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const type = req.resourceType();
      if (["image", "media", "font"].includes(type)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const targetUrl = `${ORIGIN}${urlPath}`;
    await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30_000 });

    // Wait for React to finish rendering key landmarks
    await page.waitForSelector("#root > *", { timeout: 10_000 }).catch(() => {});

    const html = await page.content();
    cache.set(cacheKey, { html, timestamp: Date.now() });
    return html;
  } finally {
    await browser.close();
  }
}

// ─── Express app ─────────────────────────────────────────────────────────────
const app = express();

// 1. Bot middleware — intercept bot traffic first before static files or SPA fallback
app.use(async (req, res, next) => {
  const ua = req.headers["user-agent"] || "";

  // Skip static assets (CSS, JS, images, etc.) regardless of UA
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|map|json|webp|avif|mp4|webm)(\?.*)?$/i.test(req.path)) {
    return next();
  }

  if (!isBot(ua)) return next();

  try {
    const html = await renderPage(req.path || "/");
    res.set("Content-Type", "text/html; charset=utf-8");
    res.set("X-Prerendered", "true");
    return res.send(html);
  } catch (err) {
    console.error(`[prerender] error rendering ${req.path}:`, err.message);
    return next(); // fall through to static file on error
  }
});

// 2. Serve static assets directly from CRA build folder
app.use(express.static(STATIC_DIR));

// 3. SPA fallback for human users (all remaining paths → index.html)
// Note: In Express 5, use app.use or catch-all middleware without '*'
app.use((req, res) => {
  res.sendFile(path.join(STATIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n🎬 VisFlix Prerender Server running at http://localhost:${PORT}`);
  console.log(`   Static dir : ${STATIC_DIR}`);
  console.log(`   Bot UA list: ${BOT_AGENTS.length} patterns\n`);
});
