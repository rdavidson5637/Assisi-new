export type EnquiryState = 'idle' | 'sending' | 'sent' | 'unconfigured' | 'error';

export async function postEnquiry(payload: Record<string, string>): Promise<EnquiryState> {
  try {
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (response.status === 503) return 'unconfigured';
    if (!response.ok) return 'error';
    return 'sent';
  } catch {
    return 'error';
  }
}
