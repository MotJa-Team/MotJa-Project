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
  "0xAd457d03c0BE45C7AE6f9564Eab79b3F12d46cFd";
export const NFT_CONTRACT_ADDRESS =
  "0xA7F6e5cDd5B9f63424c27F6C269eBF7aa59dEf67";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
