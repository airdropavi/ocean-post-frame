import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    { label: '📜 Şişeleri Oku' },
    {
      action: 'tx',
      label: '🍾 Şişe Bırak (0.0001 ETH)',
      target: `${process.env.NEXT_PUBLIC_URL}/api/tx`,
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_URL}/ocean-post-cover.png`,
    aspectRatio: '1.91:1',
  },
  postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame-handler`,
});

export const metadata: Metadata = {
  title: 'Ocean Post',
  other: { ...frameMetadata },
};

export default function Page() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', background: '#001524', color: 'white', minHeight: '100vh' }}>
      <h1>Ocean Post 🌊</h1>
      <p>Bu bir Farcaster Frame uygulamasıdır. Lütfen Warpcast üzerinden görüntüleyin.</p>
    </div>
  );
}
