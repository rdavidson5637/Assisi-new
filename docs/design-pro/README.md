# DESIGN-PRO screenshots (Assisi, 20 Nov 2026)

`before/` = origin/main at d0500ea. `after/` = branch lane/as-design-pro.
Full-page captures at 390px and 1280px wide, reduced motion on.

Pages: home `/`, `/christmas`, `/shops`. `/christmas` and `/shops` page files belong to PR #8 and draft PR #2, so their before/after differ only through shared components (PageHero on /shops).

Re-shoot against a running `next start`:

    NODE_PATH=<dir with playwright> CHROME_PATH=<chrome binary> node docs/design-pro/shoot.mjs http://localhost:3102 docs/design-pro/after

The script writes PNGs and prints a horizontal-overflow and small-target report per page. The committed
files were converted to JPEG (quality 70) to keep the repo small.
