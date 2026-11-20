import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const base = process.argv[2] || "http://localhost:3112";
const outDir = process.argv[3] || "docs/quality-mobile/after";
const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["adopt", "/adopt"],
  ["outreach", "/outreach"],
  ["legacy", "/legacy"],
];
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--disable-gpu"],
});
for (const width of [360, 390, 1280]) {
  for (const [name, path] of pages) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(500);
    const report = await page.evaluate(() => {
      const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      const small = [...document.querySelectorAll("main a, main button")]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return false;
          const cs = getComputedStyle(el);
          if (cs.display === "inline") return false;
          return r.height < 44 || r.width < 24;
        })
        .map((el) => `${el.tagName} "${(el.textContent || "").trim().slice(0, 24)}" h${Math.round(el.getBoundingClientRect().height)}`);
      return { overflow, small: small.slice(0, 8) };
    });
    await page.screenshot({ path: join(outDir, `${name}-${width}.jpg`), type: "jpeg", quality: 72, fullPage: false });
    console.log(width, path, JSON.stringify(report));
    await ctx.close();
  }
}
await browser.close();
console.log("shoot done", outDir);
