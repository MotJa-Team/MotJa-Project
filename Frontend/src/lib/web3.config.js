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
  "0x9cF160d79b12aa6899881D4B0948090b8c59eA68";
export const NFT_CONTRACT_ADDRESS =
  "0x7571a495EA49E0533eb21B33AB065CfA9bb27Da9";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
