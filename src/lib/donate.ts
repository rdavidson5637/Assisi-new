import { mailtoHref } from '@/data/site';

export type DonationType = 'one-time' | 'monthly';

export const PRESET_DONATION_AMOUNTS = [10, 25, 50, 100] as const;

export interface CustomAmountResult {
  amount: number;
  isEmpty: boolean;
  isValid: boolean;
  error: string | null;
}

export function parseCustomDonationAmount(raw: string): CustomAmountResult {
  const trimmed = raw.trim();
  if (trimmed === '') {
    return { amount: 0, isEmpty: true, isValid: false, error: null };
  }

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return {
      amount: 0,
      isEmpty: false,
      isValid: false,
      error: 'Enter an amount greater than £0.',
    };
  }

  const rounded = Math.round(parsed * 100) / 100;
  if (rounded <= 0) {
    return {
      amount: 0,
      isEmpty: false,
      isValid: false,
      error: 'Enter an amount of at least £0.01.',
    };
  }

  return { amount: rounded, isEmpty: false, isValid: true, error: null };
}

export function resolveDonationAmount(
  selectedAmount: number | null,
  customAmountRaw: string
): number {
  if (selectedAmount !== null && Number.isFinite(selectedAmount) && selectedAmount > 0) {
    return Math.round(selectedAmount * 100) / 100;
  }
  return parseCustomDonationAmount(customAmountRaw).amount;
}

export function formatDonationAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function buildDonationGiftLabel(amount: number, type: DonationType): string {
  return `£${formatDonationAmount(amount)}${type === 'monthly' ? ' a month' : ''}`;
}

export function buildDonationMailto(amount: number, type: DonationType): string {
  const giftLabel = buildDonationGiftLabel(amount, type);
  return mailtoHref(
    `Donation: ${giftLabel}`,
    `Hello,\n\nI would like to give ${giftLabel} to Assisi Animal Sanctuary. Please get in touch to arrange it.\n\nName:\nPhone:\n`
  );
}
