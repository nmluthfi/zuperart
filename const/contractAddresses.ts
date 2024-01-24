// import { Sepolia } from "@thirdweb-dev/chains";
// export const NETWORK = Sepolia;

// export const MARKETPLACE_ADDRESS = "0xCc60675851c31F4ee7be35fCf7e611de9BFc7844";

// export const NFT_COLLECTION_ADDRESS =
//   "0xFbBc38099E3771139E8C2E1e1666AbDEffE58cC6";

const customChain = {
  name: "ZuperChain",
  chainId: 7574035,
  rpc: ["https://froopyland.dymension.xyz/29/zuperchain_7574035-1/evmrpc"],
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

export const MARKETPLACE_ADDRESS = "0xC02CA8D7302936cBf6e9EF4D49bB1437837026Bf";

export const NFT_COLLECTION_ADDRESS =
  "0x3c80A37BF0f9D827347B067345B8402cc3E805dC";

export const ETHERSCAN_URL = "http://explorer.zupernetwork.tech/";