// Usage: CHROME_PATH=... NODE_PATH=<dir with playwright> node docs/remaining-mobile/shoot.mjs <baseUrl> <outDir>
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [base = "http://localhost:3102", out = "docs/remaining-mobile/before"] = process.argv.slice(2);
mkdirSync(out, { recursive: true });

const pages = [
  ["christmas", "/christmas"],
  ["contact", "/contact"],
  ["volunteer", "/volunteer"],
  ["home", "/"],
  ["about", "/about"],
];

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);

for (const width of [360, 390, 1280]) {
  const ctx = await browser.newContext({
    viewport: { width, height: width >= 1280 ? 800 : 800 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  for (const [name, path] of pages) {
    await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(800);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(250);
    const report = await page.evaluate(() => {
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      const small = [...document.querySelectorAll("main a, main button, main summary, main input, main select, main textarea")]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return false;
          const inline = el.tagName === "A" && getComputedStyle(el).display === "inline";
          return (
            !inline &&
            (r.height < 44 || r.width < 24) &&
            !(el.type === "checkbox" || el.type === "radio")
          );
        })
        .map(
          (el) =>
            `${el.tagName} "${(el.textContent || el.getAttribute("aria-label") || el.name || "").trim().slice(0, 30)}" ${Math.round(el.getBoundingClientRect().height)}px`,
        );
      const fieldSizes = [...document.querySelectorAll("main input, main textarea, main select")].map(
        (el) => `${el.name || el.id}: ${getComputedStyle(el).fontSize}`,
      );
      return { overflow, small: small.slice(0, 12), fieldSizes: fieldSizes.slice(0, 8) };
    });
    console.log(width, name, JSON.stringify(report));
    await page.screenshot({
      path: `${out}/${name}-${width}.jpg`,
      fullPage: true,
      type: "jpeg",
      quality: 70,
    });
  }
  await ctx.close();
}
await browser.close();
