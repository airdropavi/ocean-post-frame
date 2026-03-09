import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    chainId: "eip155:8453", // Base Mainnet
    method: "eth_sendTransaction",
    params: {
      abi: [], // Kontrat ABI buraya gelecek
      to: "0xC52CafC7f2BC2eA38e5A10f7F096C0Dd61E7F6c7", // Senin cüzdanın
      data: "0x", // Fonksiyon çağrısı verisi
      value: "100000000000000", // 0.0001 ETH
    },
    description: "Dropping a digital bottle into the onchain ocean... 🌊",
  });
}
