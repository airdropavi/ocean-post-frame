import { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse<FrameTransactionResponse>> {
  return NextResponse.json({
    chainId: 'eip155:8453', // Base Mainnet
    method: 'eth_sendTransaction',
    params: {
      abi: [
        {
          "inputs": [{ "internalType": "string", "name": "_message", "type": "string" }],
          "name": "dropMessage",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
      to: '0xf24aa53498f63216dd38d67702c5198f93cf00e7',
      data: '0x', // Boş tırnak yerine 0x yazdık, hata burada çözülüyor
      value: '100000000000000', // 0.0001 ETH
    },
  });
}
