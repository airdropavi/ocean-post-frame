import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';

// Sabit URL (Vercel linkin)
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
  description: 'A message in a bottle, onchain forever on Base.',
  other: { ...frameMetadata },
};

export default function Page() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      background: '#011627', 
      color: '#FDFFFC', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Ocean Post 🌊</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>Messages in a bottle, drifting on the Base network.</p>
        
        <div style={{ 
          marginTop: '40px', 
          padding: '30px', 
          border: '2px solid #2EC4B6', 
          borderRadius: '20px',
          background: 'rgba(46, 196, 182, 0.1)' 
        }}>
          <h2 style={{ color: '#2EC4B6' }}>How to interact?</h2>
          <p>This is a Farcaster Frame. Find our post on <strong>Warpcast</strong> to drop your own onchain message!</p>
          <a 
            href={SITE_URL} 
            style={{ color: '#E71D36', fontWeight: 'bold', textDecoration: 'none' }}
          >
            {SITE_URL}
          </a>
        </div>
      </div>
    </div>
  );
}
