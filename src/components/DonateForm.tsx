'use client';

import { useState } from 'react';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { site } from '@/data/site';

const AMOUNTS = [10, 25, 50, 100];

export default function DonateForm({ paymentsEnabled }: { paymentsEnabled: boolean }) {
  const [donationType, setDonationType] = useState<'once' | 'month'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [giftAid, setGiftAid] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'unconfigured'>('idle');

  const parsedCustom = customAmount ? Number.parseInt(customAmount, 10) : 0;
  const finalAmount = selectedAmount ?? (Number.isInteger(parsedCustom) ? parsedCustom : 0);
  const valid = finalAmount >= 1 && finalAmount <= 10000;

  async function pay() {
    if (!paymentsEnabled || !valid) return;
    setStatus('sending');
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount, interval: donationType, giftAid }),
      });
      const payload = (await response.json()) as { url?: string; reason?: string };
      if (response.status === 503) {
        setStatus('unconfigured');
        return;
      }
      if (!response.ok || !payload.url) {
        setStatus('error');
        return;
      }
      window.location.assign(payload.url);
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="panel p-6 md:p-8 mb-8">
      <h2 className="text-xl font-bold text-ink mb-6">Choose your donation</h2>

      <div className="flex rounded-panel border border-line p-1 mb-6">
        <button
          type="button"
          onClick={() => setDonationType('once')}
          className={`flex-1 py-2 px-4 rounded-panel font-medium transition-colors ${
            donationType === 'once' ? 'bg-ink text-cream' : 'text-ink/70'
          }`}
        >
          One-time
        </button>
        <button
          type="button"
          onClick={() => setDonationType('month')}
          className={`flex-1 py-2 px-4 rounded-panel font-medium transition-colors ${
            donationType === 'month' ? 'bg-ink text-cream' : 'text-ink/70'
          }`}
        >
          Monthly
        </button>
      </div>

      <div className="mb-6">
        <p className="block text-sm font-medium text-ink/80 mb-3">Select amount</p>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount('');
              }}
              className={`py-3 px-4 rounded-panel font-semibold border transition-colors ${
                selectedAmount === amount
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-cream text-ink/80 border-line hover:border-ink'
              }`}
            >
              £{amount}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/60">£</span>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Other amount"
            value={customAmount}
            min={1}
            max={10000}
            onChange={(event) => {
              setCustomAmount(event.target.value);
              setSelectedAmount(null);
            }}
            className="field pl-8"
            aria-label="Other amount in pounds"
          />
        </div>
      </div>

      {paymentsEnabled ? (
        <>
          <label className="flex items-start gap-3 text-sm text-ink/80 mb-6">
            <input
              type="checkbox"
              checked={giftAid}
              onChange={(event) => setGiftAid(event.target.checked)}
              className="mt-1 accent-teal"
            />
            <span>
              I am a UK taxpayer and I want {site.legalName} to claim Gift Aid on this
              donation. I understand that if I pay less Income Tax and/or Capital Gains Tax than
              the Gift Aid claimed on all my donations in that tax year, I must pay the difference.
              The payment page will ask for my address, which HMRC requires for a Gift Aid claim.
            </span>
          </label>
          <button type="button" onClick={pay} className="w-full btn-primary" disabled={!valid || status === 'sending'}>
            {status === 'sending'
              ? 'Opening secure payment...'
              : donationType === 'month'
                ? `Continue to give £${valid ? finalAmount : 0} a month`
                : `Continue to give £${valid ? finalAmount : 0}`}
          </button>
          <p className="text-center text-sm text-ink/60 mt-4">
            Card details are taken by Stripe. Assisi does not see or store your card number.
          </p>
          {status === 'error' ? (
            <p className="text-sm text-ink mt-4">
              The payment page didn&apos;t open. Please call <PhoneLink className="underline" /> or email{' '}
              <EmailLink className="underline" />.
            </p>
          ) : null}
        </>
      ) : (
        <div>
          <p className="text-ink/80">
            Card payments on this page switch on when the sanctuary connects Stripe. Until then, call{' '}
            <PhoneLink className="underline" /> or email <EmailLink className="underline" />
            {valid ? ` and say you would like to give £${finalAmount}${donationType === 'month' ? ' a month' : ''}` : ''}.
          </p>
          {status === 'unconfigured' ? (
            <p className="text-sm text-ink mt-3">The card page is not connected yet.</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
