/** Show stored ranges (hours, days) with a plain hyphen instead of en or em dashes. */
export function plainDashes(value: string): string {
  return value.replace(/\s*[–—]\s*/g, (match) => (match.trim() === match ? '-' : ' - '));
}
