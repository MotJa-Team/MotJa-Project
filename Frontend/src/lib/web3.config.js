import { MetaMaskSDK } from "@metamask/sdk";
import Web3 from "web3";

import TOKEN_CONTRACT_ABI from "@/lib/abi_token.json";
import NFT_CONTRACT_ABI from "@/lib/abi_nft.json";

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "MotJa",
    url: "https://mot-ja.vercel.app/",
  },
});

export const ethereum = MMSDK.getProvider();

export const web3 = new Web3(ethereum);

export const TOKEN_CONTRACT_ADDRESS =
  "0xE65091cE4835796735A4b774B50da4C8Ead95D7f";
export const NFT_CONTRACT_ADDRESS =
  "0x806A42B56c1565015468eD3610c8F978EaF14130";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
