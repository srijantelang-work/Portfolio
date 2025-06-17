import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  // We redirect to the PNG file directly - this ensures consistent favicons across all browsers
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black', // Black background
          color: 'white',      // White text
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        ST
      </div>
    ),
  );
} 