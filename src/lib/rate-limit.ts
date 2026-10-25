const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
const hits = new Map<string, number[]>();

/** Best-effort limit for a single server instance. A bot spread across many instances can still get through. */
export function tooManyRequests(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
  return false;
}
