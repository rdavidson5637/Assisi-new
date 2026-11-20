# Assisi remaining-mobile (AS-REMAINING-MOBILE)

Before/after screenshots at 360, 390 and 1280 for `/christmas`, `/contact`, `/volunteer` (plus home/about spot-checks).

Regenerate:

```bash
npx next dev -p 3102
CHROME_PATH=... NODE_PATH=../CK/node_modules node docs/remaining-mobile/shoot.mjs http://localhost:3102 docs/remaining-mobile/after
```

Scoped styles live in `src/styles/remaining-mobile.css` (not `globals.css` / `layout.tsx`, owned by draft PR #2).
