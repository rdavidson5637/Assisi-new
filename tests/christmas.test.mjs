import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTsModule } from './helpers/load-ts.mjs';

const {
  christmasEvents,
  christmasLinks,
  christmasFundraisingIdeas,
  isPlaceholderValue,
  resolveChristmasHref,
} = loadTsModule('@/data/christmas');
const { default: ChristmasEventsList } = loadTsModule('@/components/ChristmasEventsList');
const { default: ChristmasPage, metadata: christmasMetadata } = loadTsModule(
  '@/app/christmas/page'
);

test('christmas data uses explicit TODO placeholders and no invented events', () => {
  assert.deepEqual(christmasEvents, []);
  assert.ok(christmasFundraisingIdeas.length >= 3);

  for (const [key, value] of Object.entries(christmasLinks)) {
    assert.ok(
      value.startsWith('TODO_CHRISTMAS_'),
      `expected christmasLinks.${key} to start with TODO_CHRISTMAS_, got "${value}"`
    );
    assert.equal(isPlaceholderValue(value), true);
  }
});

test('resolveChristmasHref falls back safely for TODO placeholders and resolves real URLs', () => {
  assert.deepEqual(resolveChristmasHref('TODO_CHRISTMAS_APPEAL_URL', '/donate'), {
    href: '/donate',
    isExternal: false,
    isFallback: true,
  });
  assert.deepEqual(resolveChristmasHref('', '/contact'), {
    href: '/contact',
    isExternal: false,
    isFallback: true,
  });
  assert.deepEqual(resolveChristmasHref(undefined, '/contact'), {
    href: '/contact',
    isExternal: false,
    isFallback: true,
  });
  assert.deepEqual(resolveChristmasHref('https://example.org/appeal', '/donate'), {
    href: 'https://example.org/appeal',
    isExternal: true,
    isFallback: false,
  });
  assert.deepEqual(resolveChristmasHref('/donate', '/contact'), {
    href: '/donate',
    isExternal: false,
    isFallback: false,
  });
});

test('ChristmasEventsList renders honest empty state with no TODO hrefs', () => {
  const html = renderToStaticMarkup(React.createElement(ChristmasEventsList, { events: [] }));
  assert.ok(html.includes('Christmas events will be announced soon'));
  assert.ok(html.includes('href="/contact"'));
  assert.equal(html.includes('TODO_'), false);
  assert.equal(/[–—]/.test(html), false, 'UI copy must not contain en/em dashes');
});

test('ChristmasEventsList renders populated events cleanly with safe booking fallbacks', () => {
  const sampleEvents = [
    {
      id: 'sample-1',
      title: 'Sanctuary Winter Coffee Morning',
      dateLabel: 'Saturday 12 December',
      timeLabel: '10am–1pm',
      venue: 'Assisi Animal Sanctuary, Conlig',
      summary: 'Warm drinks and festive stalls.',
      bookingUrl: 'TODO_SAMPLE_EVENT_URL',
    },
    {
      id: 'sample-2',
      title: 'Festive Collection',
      dateLabel: 'Saturday 19 December',
      venue: 'Bangor Town Centre',
      summary: 'Say hello to our fundraising volunteers.',
      bookingUrl: 'https://www.assisi-ni.org/christmas',
    },
  ];

  const html = renderToStaticMarkup(
    React.createElement(ChristmasEventsList, { events: sampleEvents })
  );
  assert.ok(html.includes('Sanctuary Winter Coffee Morning'));
  assert.ok(html.includes('10am-1pm'), 'en dash in timeLabel should be normalised to plain hyphen');
  assert.ok(html.includes('href="/contact"'), 'TODO bookingUrl must fall back to /contact');
  assert.ok(html.includes('href="https://www.assisi-ni.org/christmas"'));
  assert.equal(html.includes('TODO_'), false);
  assert.equal(/[–—]/.test(html), false);
});

test('ChristmasPage SSR output has metadata, all sections, valid heading levels, and no TODO hrefs', () => {
  assert.equal(christmasMetadata.title, 'Christmas Appeal & Events');
  assert.ok(typeof christmasMetadata.description === 'string' && christmasMetadata.description.length > 40);
  assert.equal(christmasMetadata.alternates?.canonical, '/christmas');
  assert.ok(christmasMetadata.openGraph?.title);

  const html = renderToStaticMarkup(React.createElement(ChristmasPage));
  assert.ok(html.includes('Support the animals this Christmas'));
  assert.ok(html.includes('Ways to give at Christmas'));
  assert.ok(html.includes('Christmas events will be announced soon'));
  assert.ok(html.includes('Fundraise for us this Christmas'));
  assert.ok(html.includes('href="/donate"'));
  assert.ok(html.includes('href="/sponsor"'));
  assert.ok(html.includes('href="/membership"'));
  assert.ok(html.includes('href="/shops"'));
  assert.ok(html.includes('href="/outreach"'));
  assert.ok(html.includes('href="/volunteer"'));
  assert.ok(html.includes('href="/contact"'));
  assert.equal(/href="TODO_/.test(html), false);
  assert.equal(/[–—]/.test(html), false);

  const headingLevels = [...html.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  assert.equal(headingLevels.filter((lvl) => lvl === 1).length, 1);
  for (let i = 1; i < headingLevels.length; i++) {
    assert.ok(
      headingLevels[i] - headingLevels[i - 1] <= 1,
      `skipped heading level H${headingLevels[i - 1]} -> H${headingLevels[i]}`
    );
  }
});
