import { ImageResponse } from 'next/og';

export const alt = 'Assisi Animal Sanctuary, Help for the Helpless';
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
          justifyContent: 'flex-end',
          padding: '80px',
          background: '#FBF7EE',
          color: '#171717',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#0F4C4C', marginBottom: 24 }}>
          Conlig, Newtownards
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
          Help for the Helpless
        </div>
        <div style={{ display: 'flex', fontSize: 32 }}>Assisi Animal Sanctuary</div>
      </div>
    ),
    { ...size },
  );
}
