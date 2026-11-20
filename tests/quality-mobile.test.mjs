import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { repoRoot } from './helpers/load-ts.mjs';

const read = (rel) => fs.readFileSync(path.join(repoRoot, rel), 'utf8');

test('quality-mobile CSS reference stays token-only with 44px taps', () => {
  const css = read('src/styles/quality-mobile.css');
  assert.match(css, /\.qm-page/);
  assert.match(css, /min-height:\s*2\.75rem/);
  assert.doesNotMatch(css, /#[0-9a-fA-F]{3,8}/);
});

test('QualityMobileStyles injects the same scoped rules without a CSS import', () => {
  const source = read('src/components/QualityMobileStyles.tsx');
  assert.match(source, /\.qm-page/);
  assert.match(source, /min-height:\s*2\.75rem/);
  assert.match(source, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(source, /import\s+['\"][^'\"]+\.css['\"]/);
});

test('free pages mount QualityMobileStyles and avoid CSS module imports', () => {
  for (const file of [
    'src/app/about/page.tsx',
    'src/app/adopt/page.tsx',
    'src/app/legacy/page.tsx',
    'src/app/outreach/page.tsx',
    'src/app/page.tsx',
  ]) {
    const source = read(file);
    assert.match(source, /QualityMobileStyles/, `${file} should mount QualityMobileStyles`);
    assert.match(source, /qm-page/, `${file} should wrap with qm-page`);
    assert.doesNotMatch(source, /import\s+['\"][^'\"]*quality-mobile\.css['\"]/, `${file} must not import CSS`);
  }
});

test('ContactLinks always expose a 44px tap height', () => {
  const source = read('src/components/ContactLinks.tsx');
  assert.match(source, /min-h-11/);
});

test('header donate actions keep a 44px tap height on desktop and mobile', () => {
  const source = read('src/components/Header.tsx');
  assert.ok((source.match(/btn-primary min-h-11/g) || []).length >= 2);
});
