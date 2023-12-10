// import { Sepolia } from "@thirdweb-dev/chains";
// export const NETWORK = Sepolia;

// export const MARKETPLACE_ADDRESS = "0xCc60675851c31F4ee7be35fCf7e611de9BFc7844";

// export const NFT_COLLECTION_ADDRESS =
//   "0xFbBc38099E3771139E8C2E1e1666AbDEffE58cC6";

const customChain = {
  name: "ZuperChain",
  chainId: 6991015,
  rpc: ["https://froopyland.dymension.xyz/23/zuperchain_6991015-1/evmrpc"],
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

export const MARKETPLACE_ADDRESS = "0xf8240B48CAe2a575d5f71B4C473637c5998A64E4";

export const NFT_COLLECTION_ADDRESS =
  "0x4c851bB1384c56093c9F7F7e11BED1E9372803a2";

export const ETHERSCAN_URL = "http://explorer.zupernetwork.tech/";