// import { Sepolia } from "@thirdweb-dev/chains";
// export const NETWORK = Sepolia;

// export const MARKETPLACE_ADDRESS = "0xCc60675851c31F4ee7be35fCf7e611de9BFc7844";

// export const NFT_COLLECTION_ADDRESS =
//   "0xFbBc38099E3771139E8C2E1e1666AbDEffE58cC6";

const customChain = {
  name: "ZuperChain",
  chainId: 3974892,
  rpc: ["https://froopyland.dymension.xyz/21/zuperchain_3974892-1/evmrpc"],
  nativeCurrency: {
      decimals: 18,
      name: "Zuper",
      symbol: "ZUPER",
    }, 
  testnet: true,
  chain: "ZuperChain",
  shortName: "ZC",
  slug: "zuperchain",
}
export const NETWORK = customChain;

export const MARKETPLACE_ADDRESS = "0x9961c6a8B206C32738a2702aCEd0738A527864f4";

export const NFT_COLLECTION_ADDRESS =
  "0x1B9F34CD0A876048B5290Dbf5a923Eb29145F6C2";

export const ETHERSCAN_URL = "http://explorer.zupernetwork.tech/";