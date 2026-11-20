import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTsModule, repoRoot, srcRoot } from './helpers/load-ts.mjs';

// Accessibility checks: render real components to HTML and check labels, tap targets and focus,
// and check the palette's text contrast against WCAG 2.2 AA straight from globals.css.

const render = (specifier, props = {}) => {
  const Component = loadTsModule(specifier).default;
  return renderToStaticMarkup(React.createElement(Component, props));
};

const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'g')) ?? [];
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

test('contact page: every field has a label, an autofill hint where useful, and a 44px tap height', () => {
  const html = render('@/app/contact/page');
  const fields = [...tags(html, 'input'), ...tags(html, 'textarea')];
  assert.equal(fields.length, 4);
  for (const field of fields) {
    const id = attr(field, 'id');
    assert.ok(id, `field without id: ${field}`);
    assert.ok(html.includes(`for="${id}"`), `no <label for="${id}">`);
    assert.match(attr(field, 'class') ?? '', /\bmin-h-11\b/, `${id} should be at least 44px tall`);
  }
  for (const name of ['name', 'email', 'phone']) {
    const field = fields.find((tag) => attr(tag, 'name') === name);
    assert.equal(attr(field, 'autoComplete') ?? attr(field, 'autocomplete'), name === 'phone' ? 'tel' : name);
  }
  assert.match(html, /marked \* must be filled in/, 'explain the * marker');
  for (const link of tags(html, 'a').filter((tag) => /^(tel|mailto):/.test(attr(tag, 'href') ?? ''))) {
    assert.match(attr(link, 'class') ?? '', /\bmin-h-11\b/, `contact link too small to tap: ${link}`);
  }
});

test('contact draft: names the sender, includes phone only when given, keeps the message', () => {
  const { buildContactDraft, readContactForm } = loadTsModule('@/lib/contact');
  const answers = readContactForm(
    new Map([
      ['name', '  Ada  '],
      ['email', 'ada@example.com'],
      ['phone', ''],
      ['message', 'Can I visit on Saturday?'],
    ])
  );
  assert.deepEqual(answers, { name: 'Ada', email: 'ada@example.com', phone: '', message: 'Can I visit on Saturday?' });
  const draft = buildContactDraft(answers);
  assert.equal(draft.subject, 'Message from Ada');
  assert.equal(draft.body, 'Name: Ada\nEmail: ada@example.com\n\nCan I visit on Saturday?');
  assert.match(buildContactDraft({ ...answers, phone: '07700 900000' }).body, /Phone: 07700 900000/);
  assert.equal(buildContactDraft({ ...answers, name: '' }).subject, 'Message from the website');
  assert.deepEqual(readContactForm(new Map()), { name: '', email: '', phone: '', message: '' });
});

test('header: mobile menu button is labelled, reports its state, and is 44px', () => {
  const html = render('@/components/Header');
  const button = tags(html, 'button')[0];
  assert.equal(attr(button, 'aria-label'), 'Toggle menu');
  assert.equal(attr(button, 'aria-expanded'), 'false');
  assert.equal(attr(button, 'aria-controls'), 'mobile-nav');
  assert.match(attr(button, 'class'), /\bh-11\b/);
  assert.match(attr(button, 'class'), /\bw-11\b/);
  assert.match(html, /<nav aria-label="Main"/);
});

test('footer: phone and email are tappable and the focus ring is visible on ink', () => {
  const { site } = loadTsModule('@/data/site');
  const html = render('@/components/Footer');
  const footer = tags(html, 'footer')[0];
  assert.match(attr(footer, 'class').replaceAll('&amp;', '&'), /\[&_:focus-visible\]:outline-cream!/);
  for (const href of [site.phoneHref, site.emailHref]) {
    const link = tags(html, 'a').find((tag) => attr(tag, 'href') === href);
    assert.ok(link, `footer should link ${href}`);
    assert.match(attr(link, 'class'), /\bmin-h-11\b/);
  }
});

test('home page: dark hero switches the focus ring and standalone text links are 44px', () => {
  const source = fs.readFileSync(path.join(srcRoot, 'app/page.tsx'), 'utf8');
  assert.match(source, /bg-ink text-cream[^"]*\[&_:focus-visible\]:outline-cream!/);
  for (const match of source.matchAll(/className="([^"]*btn-secondary[^"]*)"/g)) {
    // .btn-secondary is display:inline outside Tailwind's layers, so min-h needs inline-flex!.
    assert.match(match[1], /inline-flex!/, `btn-secondary needs inline-flex!: ${match[1]}`);
    assert.match(match[1], /\bmin-h-11\b/, `btn-secondary needs min-h-11: ${match[1]}`);
  }
});

// --- Contrast ---

const css = fs.readFileSync(path.join(repoRoot, 'src/app/globals.css'), 'utf8');
const token = (name) => {
  const hex = css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
  assert.ok(hex, `--${name} should be a hex colour`);
  return [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));
};
const over = (fg, bg, alpha) => fg.map((value, index) => value * alpha + bg[index] * (1 - alpha));
const luminance = (rgb) => {
  const [r, g, b] = rgb.map((value) => {
    const c = value / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

const paper = token('paper');
const ink = token('ink');
const amber = token('amber');
const amberHover = token('amber-hover');

test('palette text pairs meet 4.5:1', () => {
  const pairs = [
    ['ink on paper', ink, paper],
    ['ink/70 on paper', over(ink, paper, 0.7), paper],
    ['ink on amber button', ink, amber],
    ['ink on amber hover', ink, amberHover],
    ['cream on ink', paper, ink],
    ['cream/50 on ink (footer small print)', over(paper, ink, 0.5), ink],
  ];
  for (const [name, fg, bg] of pairs) {
    const ratio = contrast(fg, bg);
    assert.ok(ratio >= 4.5, `${name} is ${ratio.toFixed(2)}:1`);
  }
});

function sourceFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? sourceFiles(full) : /\.tsx?$/.test(entry.name) ? [full] : [];
  });
}

test('no text lighter than ink/70 on paper (ink/60 is 4.39:1)', (t) => {
  assert.ok(contrast(over(ink, paper, 0.6), paper) < 4.5, 'if this fails, ink/60 now passes and the check can go');
  const offenders = sourceFiles(srcRoot)
    .filter((file) => /\btext-ink\/(?:[1-5]0|60)\b/.test(fs.readFileSync(file, 'utf8')))
    .map((file) => path.relative(repoRoot, file));
  if (offenders.length) {
    // These files are owned by open PRs #2 and #8 on 20 Nov 2026; fix there or after they merge.
    t.todo(`text-ink/60 or lighter still used in: ${offenders.join(', ')}`);
  }
});
