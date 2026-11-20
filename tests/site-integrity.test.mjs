import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { loadTsModule, repoRoot, srcRoot } from './helpers/load-ts.mjs';

const { animals } = loadTsModule('@/data/animals');
const { shops } = loadTsModule('@/data/shops');
const { site } = loadTsModule('@/data/site');
const { default: buildSitemap } = loadTsModule('@/app/sitemap');

const STATIC_ROUTES = [
  '/',
  '/about',
  '/adopt',
  '/christmas',
  '/contact',
  '/donate',
  '/legacy',
  '/membership',
  '/outreach',
  '/shops',
  '/sponsor',
  '/volunteer',
];

function walkFiles(dir, predicate, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, predicate, out);
    } else if (predicate(full)) {
      out.push(full);
    }
  }
  return out;
}

function routeToAppDir(route) {
  return route === '/' ? path.join(srcRoot, 'app') : path.join(srcRoot, 'app', route.slice(1));
}

function checkHeadingHierarchy(html, label) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  assert.ok(mainMatch, `${label}: missing <main> landmark`);
  const mainHtml = mainMatch[1];
  const levels = [...mainHtml.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  const h1Count = levels.filter((lvl) => lvl === 1).length;
  assert.equal(h1Count, 1, `${label}: expected exactly 1 <h1> in <main>, found ${h1Count}`);
  for (let i = 1; i < levels.length; i++) {
    assert.ok(
      levels[i] - levels[i - 1] <= 1,
      `${label}: heading level skipped from H${levels[i - 1]} to H${levels[i]}`
    );
  }
}

test('all data images and public assets exist on disk', () => {
  const publicDir = path.join(repoRoot, 'public');
  assert.ok(fs.existsSync(path.join(publicDir, 'logo.jpg')), 'public/logo.jpg missing');
  assert.ok(
    fs.existsSync(path.join(publicDir, site.magazine.cover.replace(/^\//, ''))),
    `magazine cover missing: ${site.magazine.cover}`
  );
  assert.equal(
    site.wishlistUrl.toLowerCase().includes('example'),
    false,
    'Amazon wishlist URL must not be an example placeholder'
  );

  const seenIds = new Set();
  for (const animal of animals) {
    assert.ok(animal.id && !seenIds.has(animal.id), `duplicate/empty animal id: ${animal.id}`);
    seenIds.add(animal.id);
    assert.ok(animal.name.trim().length > 0, `empty name for ${animal.id}`);
    const imagePath = path.join(publicDir, animal.image.replace(/^\//, ''));
    assert.ok(fs.existsSync(imagePath), `missing animal image for ${animal.id}: ${animal.image}`);
  }
});

test('sitemap includes every static route and every animal profile', () => {
  const entries = buildSitemap();
  const urls = new Set(entries.map((e) => e.url));

  for (const route of STATIC_ROUTES) {
    const expected = `https://www.assisi-ni.org${route === '/' ? '' : route}`;
    assert.ok(urls.has(expected), `sitemap missing static route ${route}`);
  }
  for (const animal of animals) {
    assert.ok(
      urls.has(`https://www.assisi-ni.org/adopt/${animal.id}`),
      `sitemap missing animal route /adopt/${animal.id}`
    );
  }
});

test('every App Router page has metadata with title, description, canonical, and openGraph', () => {
  const pageFiles = walkFiles(path.join(srcRoot, 'app'), (f) => f.endsWith('/page.tsx'));
  assert.ok(pageFiles.length >= STATIC_ROUTES.length);

  for (const route of STATIC_ROUTES) {
    const dir = routeToAppDir(route);
    const pagePath = path.join(dir, 'page.tsx');
    const layoutPath = path.join(dir, 'layout.tsx');
    assert.ok(fs.existsSync(pagePath), `missing page.tsx for ${route}`);

    const pageSrc = fs.readFileSync(pagePath, 'utf8');
    const layoutSrc = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, 'utf8') : '';
    const combined = `${pageSrc}\n${layoutSrc}`;

    assert.ok(
      /export\s+(const\s+metadata|async\s+function\s+generateMetadata)/.test(combined),
      `route ${route} does not export metadata`
    );

    if (route !== '/') {
      const modPath = /export\s+const\s+metadata/.test(pageSrc) ? pagePath : layoutPath;
      const mod = loadTsModule(modPath);
      assert.ok(mod.metadata, `could not read metadata export for ${route}`);
      assert.ok(mod.metadata.title, `missing metadata.title for ${route}`);
      assert.ok(
        typeof mod.metadata.description === 'string' && mod.metadata.description.length > 20,
        `missing/short metadata.description for ${route}`
      );
      assert.equal(
        mod.metadata.alternates?.canonical,
        route,
        `expected canonical "${route}" on ${route}`
      );
      assert.ok(mod.metadata.openGraph?.title, `missing openGraph.title for ${route}`);
      assert.ok(mod.metadata.openGraph?.description, `missing openGraph.description for ${route}`);
    }
  }

  // Dynamic route /adopt/[id]
  const animalPageSrc = fs.readFileSync(
    path.join(srcRoot, 'app', 'adopt', '[id]', 'page.tsx'),
    'utf8'
  );
  assert.ok(
    /export\s+async\s+function\s+generateMetadata/.test(animalPageSrc),
    '/adopt/[id] must export generateMetadata'
  );
});

test('all static internal Link hrefs in src/ resolve to valid routes and shop anchors', () => {
  const validRoutes = new Set(STATIC_ROUTES);
  const validShopIds = new Set(shops.map((shop) => shop.id));
  const sourceFiles = walkFiles(srcRoot, (f) => f.endsWith('.tsx') || f.endsWith('.ts'));

  for (const file of sourceFiles) {
    const src = fs.readFileSync(file, 'utf8');
    const matches = src.matchAll(/href=["'](\/[^"'${}]*)["']/g);
    for (const match of matches) {
      const rawHref = match[1];
      if (rawHref.startsWith('/images/') || rawHref === '/logo.jpg') continue;
      const [pathname, hash] = rawHref.split('#');
      assert.ok(
        validRoutes.has(pathname),
        `broken internal href "${rawHref}" in ${path.relative(repoRoot, file)}`
      );
      if (pathname === '/shops' && hash) {
        assert.ok(
          validShopIds.has(hash),
          `broken shop anchor "${rawHref}" in ${path.relative(repoRoot, file)}`
        );
      }
    }
  }
});

test('all <Image> and <img> elements in src/ specify non-empty alt text', () => {
  const tsxFiles = walkFiles(srcRoot, (f) => f.endsWith('.tsx'));
  for (const file of tsxFiles) {
    const src = fs.readFileSync(file, 'utf8');
    const imgTags = src.matchAll(/<(Image|img)\b([\s\S]*?)\/>/g);
    for (const match of imgTags) {
      const attrs = match[2];
      assert.ok(
        /\balt=(?:"[^"]+"|'[^']+'|\{[^}]+\})/.test(attrs),
        `missing or empty alt attribute on <${match[1]}> in ${path.relative(repoRoot, file)}`
      );
    }
  }
});

test('globals.css defines visible focus indicator, reduced motion, and layout tokens', () => {
  const css = fs.readFileSync(path.join(srcRoot, 'app', 'globals.css'), 'utf8');
  assert.ok(css.includes(':focus-visible'), 'globals.css must define :focus-visible styles');
  assert.ok(
    css.includes('prefers-reduced-motion: reduce'),
    'globals.css must respect prefers-reduced-motion'
  );
  assert.ok(css.includes('--paper: #f6f1e6'), 'paper token must remain #f6f1e6');
  assert.ok(css.includes('--ink: #1a1a1a'), 'ink token must remain #1a1a1a');
  assert.ok(css.includes('--amber: #fbbf24'), 'amber token must remain #fbbf24');

  const layoutSrc = fs.readFileSync(path.join(srcRoot, 'app', 'layout.tsx'), 'utf8');
  assert.ok(layoutSrc.includes('href="#main-content"'), 'RootLayout must include skip link');
  assert.ok(layoutSrc.includes('id="main-content"'), 'RootLayout must include #main-content target');
});

test('built static HTML passes metadata, alt text, link, heading, label, and dash checks', (t) => {
  const buildAppDir = path.join(repoRoot, '.next', 'server', 'app');
  if (!fs.existsSync(buildAppDir)) {
    t.skip('Run `npm run build` first to verify compiled HTML output.');
    return;
  }

  const validRoutes = new Set([
    ...STATIC_ROUTES,
    ...animals.map((a) => `/adopt/${a.id}`),
  ]);
  const validShopIds = new Set(shops.map((shop) => shop.id));
  const routesToCheck = [...STATIC_ROUTES, `/adopt/${animals[0].id}`];

  for (const route of routesToCheck) {
    const htmlFile =
      route === '/'
        ? path.join(buildAppDir, 'index.html')
        : path.join(buildAppDir, `${route.slice(1)}.html`);
    assert.ok(fs.existsSync(htmlFile), `missing built HTML for ${route} at ${htmlFile}`);

    const html = fs.readFileSync(htmlFile, 'utf8');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1];
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];

    assert.ok(title && title.includes('Assisi Animal Sanctuary'), `${route}: bad <title> (${title})`);
    assert.ok(description && description.length > 20, `${route}: missing meta description`);
    assert.ok(canonical, `${route}: missing canonical link`);
    assert.ok(ogTitle, `${route}: missing og:title`);
    assert.ok(ogImage, `${route}: missing og:image`);

    // Skip link + main landmark + heading order
    assert.ok(html.includes('href="#main-content"'), `${route}: missing skip link`);
    checkHeadingHierarchy(html, route);

    // Every rendered <img> has a non-empty alt attribute
    for (const imgMatch of html.matchAll(/<img\b([^>]*)>/gi)) {
      const attrs = imgMatch[1];
      const altMatch = attrs.match(/\balt="([^"]*)"/i);
      assert.ok(altMatch && altMatch[1].trim().length > 0, `${route}: <img> missing non-empty alt`);
    }

    // No broken internal links and no raw TODO_ hrefs
    for (const hrefMatch of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
      const href = hrefMatch[1];
      assert.equal(href.includes('TODO_'), false, `${route}: raw TODO href "${href}"`);
      if (href.startsWith('/')) {
        const [pathname, hash] = href.split('#');
        assert.ok(validRoutes.has(pathname), `${route}: broken internal link "${href}"`);
        if (pathname === '/shops' && hash) {
          assert.ok(validShopIds.has(hash), `${route}: broken shop anchor "${href}"`);
        }
      }
    }

    // Every form input/select/textarea inside <main> has a label or aria-label
    const mainHtml = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
    for (const ctrlMatch of mainHtml.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
      const attrs = ctrlMatch[2];
      const id = attrs.match(/\bid="([^"]+)"/i)?.[1];
      const hasAria = /\baria-label(?:ledby)?="/i.test(attrs);
      const hasLabelFor = id ? mainHtml.includes(`for="${id}"`) : false;
      assert.ok(
        hasAria || hasLabelFor,
        `${route}: unlabelled <${ctrlMatch[1]}> control (${attrs.slice(0, 80)})`
      );
    }

    // No raw en/em dashes in visible page copy outside animal descriptions
    if (!route.startsWith('/adopt/')) {
      const visibleText = mainHtml
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ');
      assert.equal(/[–—]/.test(visibleText), false, `${route}: found en/em dash in visible text`);
    }
  }
});
