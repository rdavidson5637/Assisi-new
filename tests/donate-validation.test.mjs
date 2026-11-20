import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTsModule } from './helpers/load-ts.mjs';

const {
  PRESET_DONATION_AMOUNTS,
  parseCustomDonationAmount,
  resolveDonationAmount,
  formatDonationAmount,
  buildDonationGiftLabel,
  buildDonationMailto,
} = loadTsModule('@/lib/donate');

test('preset donation amounts stay positive whole numbers', () => {
  assert.deepEqual([...PRESET_DONATION_AMOUNTS], [10, 25, 50, 100]);
  for (const amount of PRESET_DONATION_AMOUNTS) {
    assert.equal(resolveDonationAmount(amount, ''), amount);
  }
});

test('parseCustomDonationAmount accepts positive whole and decimal amounts', () => {
  assert.deepEqual(parseCustomDonationAmount('15'), {
    amount: 15,
    isEmpty: false,
    isValid: true,
    error: null,
  });
  assert.deepEqual(parseCustomDonationAmount(' 12.5 '), {
    amount: 12.5,
    isEmpty: false,
    isValid: true,
    error: null,
  });
  assert.deepEqual(parseCustomDonationAmount('12.345'), {
    amount: 12.35,
    isEmpty: false,
    isValid: true,
    error: null,
  });
});

test('parseCustomDonationAmount rejects negative, zero, sub-penny, and non-numeric input', () => {
  assert.deepEqual(parseCustomDonationAmount(''), {
    amount: 0,
    isEmpty: true,
    isValid: false,
    error: null,
  });
  assert.deepEqual(parseCustomDonationAmount('   '), {
    amount: 0,
    isEmpty: true,
    isValid: false,
    error: null,
  });

  for (const bad of ['-1', '-25.50', '0', '0.00', 'abc', '£20', 'Infinity', '1e999', 'NaN']) {
    const result = parseCustomDonationAmount(bad);
    assert.equal(result.amount, 0, `expected "${bad}" to resolve to 0`);
    assert.equal(result.isValid, false, `expected "${bad}" to be invalid`);
    assert.ok(result.error, `expected "${bad}" to surface a user-facing error`);
  }

  const tiny = parseCustomDonationAmount('0.001');
  assert.equal(tiny.amount, 0);
  assert.equal(tiny.isValid, false);
  assert.ok(tiny.error);
});

test('resolveDonationAmount prefers valid preset and falls back to validated custom input', () => {
  assert.equal(resolveDonationAmount(25, '-10'), 25);
  assert.equal(resolveDonationAmount(null, '35'), 35);
  assert.equal(resolveDonationAmount(null, '-50'), 0);
  assert.equal(resolveDonationAmount(null, '0'), 0);
  assert.equal(resolveDonationAmount(-10, '15'), 15);
});

test('formatDonationAmount, gift label, and mailto link format cleanly', () => {
  assert.equal(formatDonationAmount(25), '25');
  assert.equal(formatDonationAmount(12.5), '12.50');
  assert.equal(buildDonationGiftLabel(25, 'one-time'), '£25');
  assert.equal(buildDonationGiftLabel(12.5, 'monthly'), '£12.50 a month');

  const href = buildDonationMailto(25, 'monthly');
  assert.ok(href.startsWith('mailto:info@assisi-ni.org?subject='));
  assert.ok(href.includes(encodeURIComponent('Donation: £25 a month')));
  assert.equal(href.includes('+'), false, 'mailto must encode spaces as %20, not +');
});
