import { MetaMaskSDK } from "@metamask/sdk";
import Web3 from "web3";

import TOKEN_CONTRACT_ABI from "@/lib/abi_token.json";
import NFT_CONTRACT_ABI from "@/lib/abi_nft.json";

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "h662",
    url: "https://h662.com",
  },
});

export const ethereum = MMSDK.getProvider();

export const web3 = new Web3(ethereum);

export const TOKEN_CONTRACT_ADDRESS =
  "0x6021F8e5419c09b3669eE8cA48eDEA48EB49B0dE";
export const NFT_CONTRACT_ADDRESS =
  "0x394659a2B8255E2a1F3E3D59D4420F9295b7a364";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
