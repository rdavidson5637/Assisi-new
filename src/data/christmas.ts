export interface ChristmasEvent {
  id: string;
  title: string;
  /** Confirmed date text from Assisi (never invent dates). */
  dateLabel: string;
  /** Confirmed time text from Assisi, if applicable. */
  timeLabel?: string;
  /** Confirmed venue and town from Assisi. */
  venue: string;
  summary: string;
  /** Confirmed booking or details URL, or a TODO_* placeholder until live. */
  bookingUrl?: string;
}

export interface ChristmasPlaceholderLinks {
  appealUrl: string;
  eventsCalendarUrl: string;
  giftShopUrl: string;
  fundraisingPackUrl: string;
}

/**
 * Replace TODO_* placeholders with real URLs once confirmed by Ryan / Assisi.
 * While a value starts with "TODO_", the page falls back to existing routes
 * (/donate, /shops, /contact) instead of rendering a broken link.
 */
export const christmasLinks: ChristmasPlaceholderLinks = {
  appealUrl: 'TODO_CHRISTMAS_APPEAL_URL',
  eventsCalendarUrl: 'TODO_CHRISTMAS_EVENTS_URL',
  giftShopUrl: 'TODO_CHRISTMAS_GIFT_SHOP_URL',
  fundraisingPackUrl: 'TODO_CHRISTMAS_FUNDRAISING_PACK_URL',
};

export interface ResolvedChristmasLink {
  href: string;
  isExternal: boolean;
  isFallback: boolean;
}

export function isPlaceholderValue(value: string | undefined | null): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return trimmed.length === 0 || trimmed.startsWith('TODO_');
}

export function resolveChristmasHref(
  candidateUrl: string | undefined,
  fallbackHref: string
): ResolvedChristmasLink {
  if (isPlaceholderValue(candidateUrl)) {
    return { href: fallbackHref, isExternal: false, isFallback: true };
  }
  const trimmed = candidateUrl!.trim();
  return {
    href: trimmed,
    isExternal: /^https?:\/\//i.test(trimmed),
    isFallback: false,
  };
}

/**
 * Confirmed Christmas events only. Keep empty until Assisi confirms dates,
 * times and venues; the /christmas page shows an honest empty state when empty.
 */
export const christmasEvents: ChristmasEvent[] = [];

export const christmasFundraisingIdeas = [
  {
    title: 'Christmas jumper day or festive bake sale',
    description:
      'Host a seasonal get-together at work, school or your local club and invite people to chip in for the animals at Assisi.',
  },
  {
    title: 'Collection tins and local raffles',
    description:
      'Ask a local shop, cafe or workplace if they can host a collection tin or support a small festive raffle.',
  },
  {
    title: 'Sponsored winter walk',
    description:
      'Organise a walk with friends, family or fellow dog lovers and raise sponsorship for food, warmth and vet care.',
  },
  {
    title: 'Donate in lieu of cards or gifts',
    description:
      'Collect donations instead of exchanging Christmas cards at work, or ask friends to support Assisi in place of a present.',
  },
] as const;
