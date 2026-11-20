// Usage: NODE_PATH=<dir containing playwright> node docs/design-pro-2/shoot.mjs <baseUrl> <outDir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [base = "http://localhost:3102", out = "docs/design-pro-2/after"] = process.argv.slice(2);
const pages = [
  ["about", "/about"],
  ["adopt", "/adopt"],
  ["outreach", "/outreach"],
  ["legacy", "/legacy"],
];
const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
for (const width of [390, 1280]) {
  const ctx = await browser.newContext({
    viewport: { width, height: width === 390 ? 844 : 800 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  for (const [name, path] of pages) {
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);
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
      return { overflow, small: small.slice(0, 8) };
    });
    console.log(width, name, JSON.stringify(report));
    await page.screenshot({ path: `${out}/${name}-${width}.jpg`, fullPage: true, type: "jpeg", quality: 70 });
  }
  await ctx.close();
}
await browser.close();
