import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';

const SITE_URL = 'https://ocean-post-frame.vercel.app';

const frameMetadata = getFrameMetadata({
  buttons: [
    { 
      label: '📜 Read Messages',
      action: 'post' 
    },
    {
      action: 'tx',
      label: '🍾 Drop Bottle (0.0001 ETH)',
      target: `${SITE_URL}/api/tx`,
    },
  ],
  image: {
    src: `${SITE_URL}/ocean-post-cover.png`,
    aspectRatio: '1.91:1',
  },
  postUrl: `${SITE_URL}/api/frame-handler`,
});

export const metadata: Metadata = {
  title: 'Ocean Post 🌊',
  description: 'Leave your mark on the Base blockchain.',
  other: { ...frameMetadata },
};

export default function Page() {
  return (
    <div style={{ 
      padding: '50px', textAlign: 'center', background: '#011627', 
      color: '#FDFFFC', minHeight: '100vh', fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem' }}>Ocean Post 🌊</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Onchain messages drifting forever on Base.</p>
      <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #2EC4B6', borderRadius: '15px' }}>
        <p>This is a Farcaster Frame. Please interact via Warpcast.</p>
        <p style={{ fontSize: '0.9rem', color: '#2EC4B6' }}>Built by rockart.base.eth</p>
      </div>
    </div>
  );
}
