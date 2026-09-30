import { ImageResponse } from 'next/og';

export const alt = 'Assisi Animal Sanctuary — Help for the Helpless';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#111827',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 24,
            background: '#fbbf24',
            color: '#111827',
            fontSize: 44,
            fontWeight: 800,
            marginBottom: 48,
          }}
        >
          A
        </div>
        <div
          style={{
            display: 'flex',
            color: '#fbbf24',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Northern Ireland · Est. 1997
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Every animal deserves a second chance
        </div>
        <div style={{ display: 'flex', color: '#d1d5db', fontSize: 32 }}>
          Assisi Animal Sanctuary — Help for the Helpless
        </div>
      </div>
    ),
    { ...size }
  );
}
