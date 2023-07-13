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
  "0xC666d754079752B38A54BB2606617d5f14c83778";
export const NFT_CONTRACT_ADDRESS =
  "0x40218aC40F70c7B6811e45bF5F6c263F6515Be98";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
