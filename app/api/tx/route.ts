import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return NextResponse.json({
    image: {
      src: 'https://ocean-post-frame.vercel.app/ocean-post-cover.png',
    },
    buttons: [
      { label: '✅ Message Sent!', action: 'post' },
      { label: 'View on Explorer', action: 'link', target: 'https://basescan.org' }
    ],
    message: "Your bottle is now drifting on Base! 🍾"
  });
}
