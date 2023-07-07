import Web3 from "web3";
import TOKEN_CONTRACT_ABI from "@/lib/abi_token.json";
import NFT_CONTRACT_ABI from "@/lib/abi_nft.json";

export const web3 = new Web3(window.ethereum);

const TOKEN_CONTRACT_ADDRESS = "0x52Ddd0b802846D0a7E9bCEBcf4822F6B7616386a";
const NFT_CONTRACT_ADDRESS = "0xCb876aE83E146590dF8f3eDAE1997B40aB223977";

export const TOKEN_CONTRACT = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
export const NFT_CONTRACT = new web3.eth.Contract(
  NFT_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS
);
