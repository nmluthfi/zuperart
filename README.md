# ZuperArt — NFT Marketplace on ZuperChain

> A permissioned NFT marketplace dApp built on **ZuperChain**, a custom EVM-compatible Layer 2 rollup. ZuperArt lets users **buy**, **sell**, and **auction** NFTs from a curated, whitelisted collection — powered by thirdweb's Marketplace v3 smart contracts.

---

## 🌐 Background

ZuperArt was built as part of the **ZuperCollective** ecosystem — an on-chain community experiment running on ZuperChain, a testnet rollup built on top of the Dymension rollup framework.

The core idea behind ZuperArt is **permissioned curation**: instead of opening the marketplace to all NFT projects, only **approved (whitelisted) collections** are tradable. This makes it well-suited for curated drops, early-access NFT passes, and community-based ownership schemes — for example, the "ZuperPass" collection, which serves as a membership token in the ZuperHunt ecosystem.

I built this project to:
- **Learn full-stack Web3 development** by integrating a custom EVM chain with a modern React/Next.js frontend.
- **Explore thirdweb SDK v3**, particularly its marketplace primitives (direct listings, English auctions, and offers).
- **Deploy a real dApp** end-to-end on a non-standard chain, from custom chain configuration to IPFS-hosted deployment.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛒 **Browse & Buy** | View all NFTs in the whitelisted collection and purchase at floor price |
| 💰 **Sell / List** | List owned NFTs as direct listings |
| 🔨 **Auction** | Run English auctions for NFTs with bidding support |
| 🎯 **Place Bids / Offers** | Make offers on listed or auctioned NFTs |
| 👤 **User Profile** | View any wallet's NFT holdings, active listings, and auctions |
| 📜 **Transfer History** | See on-chain transfer history for each individual NFT |
| 🔗 **Explorer Links** | Direct links to ZuperChain block explorer for all transactions |
| 💳 **Wallet Support** | All EVM-compatible wallets are supported |

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [Next.js 13](https://nextjs.org/) + TypeScript |
| **Web3 / Smart Contracts** | [thirdweb SDK v3](https://thirdweb.com/) (`@thirdweb-dev/react`, `@thirdweb-dev/sdk`) |
| **Blockchain** | ZuperChain (EVM-compatible, Chain ID: `7574035`) |
| **Native Currency** | ZUPER |
| **Wallet Integration** | EVM-compatible Wallet |
| **Styling** | Vanilla CSS Modules |
| **Deployment** | IPFS via `thirdweb upload` |

---

## 📋 Smart Contract Addresses

| Contract | Address |
|---|---|
| **NFT Collection** | [`0x3c80A37BF0f9D827347B067345B8402cc3E805dC`](http://explorer.zupernetwork.tech/address/0x3c80A37BF0f9D827347B067345B8402cc3E805dC) |
| **Marketplace (v3)** | [`0xC02CA8D7302936cBf6e9EF4D49bB1437837026Bf`](http://explorer.zupernetwork.tech/address/0xC02CA8D7302936cBf6e9EF4D49bB1437837026Bf) |

> 🔗 Block Explorer: [explorer.zupernetwork.tech](http://explorer.zupernetwork.tech/)  
> 💧 Faucet: [faucet.zupernetwork.tech](http://faucet.zupernetwork.tech/)

---

## 📁 File Tree

```
zuperart/
├── components/                  # Reusable UI components
│   ├── Container/               # Max-width layout wrapper
│   ├── Footer/                  # Site footer
│   ├── ListingWrapper/          # Renders a single marketplace listing card
│   ├── Navbar/                  # Top navigation bar
│   ├── NFT/                     # NFT grid and individual NFT card
│   ├── SaleInfo/                # Listing form (price input, list button)
│   └── Skeleton/                # Loading skeleton placeholder
│
├── const/
│   └── contractAddresses.ts     # Chain config, marketplace & NFT contract addresses
│
├── pages/                       # Next.js file-based routing
│   ├── _app.tsx                 # App root: ThirdwebProvider, Navbar, Footer
│   ├── index.tsx                # Landing / hero page
│   ├── buy.tsx                  # Browse all NFTs in the collection
│   ├── sell.tsx                 # Select & list an owned NFT for sale
│   ├── profile/
│   │   └── [address].tsx        # User profile: NFTs, listings, auctions
│   └── token/
│       └── [contractAddress]/
│           └── [tokenId].tsx    # Individual NFT detail, buy/bid page
│
├── styles/                      # CSS Modules
│   ├── globals.css
│   ├── Home.module.css
│   ├── Buy.module.css
│   ├── Sale.module.css
│   ├── Token.module.css
│   └── Profile.module.css
│
├── util/                        # Utility helpers
│   ├── formatTimeRemaining.ts   # Countdown timer formatter for auctions
│   ├── randomColor.ts           # Random hex color generator (profile avatars)
│   └── toastConfig.ts           # Shared toast notification styles
│
├── public/                      # Static assets (images, icons)
├── .env.example                 # Environment variable template
├── next.config.js               # Next.js configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16
- **Yarn** (the project uses Yarn as its package manager)
- A [thirdweb](https://thirdweb.com/) account to obtain your API keys
- MetaMask or a WalletConnect-compatible wallet

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/zuperart.git
cd zuperart
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Configure Environment Variables

Copy the example env file and fill in your thirdweb credentials:

```bash
cp .env.example .env.local
```

Open `.env.local` and set the following values:

```env
# Your thirdweb Client ID (used client-side)
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your_thirdweb_client_id_here

# Your thirdweb Secret Key (used server-side for static generation)
TW_SECRET_KEY=your_thirdweb_secret_key_here
```

> You can get these keys from the [thirdweb dashboard](https://thirdweb.com/dashboard) → **Settings → API Keys**.

### 4. Run the Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Add ZuperChain to Your Wallet

To interact with the dApp, add the ZuperChain network to MetaMask:

| Field | Value |
|---|---|
| **Network Name** | ZuperChain |
| **RPC URL** | `https://froopyland.dymension.xyz/29/zuperchain_7574035-1/evmrpc` |
| **Chain ID** | `7574035` |
| **Currency Symbol** | `ZUPER` |
| **Block Explorer** | `http://explorer.zupernetwork.tech/` |

Then claim testnet ZUPER tokens from the [faucet](http://faucet.zupernetwork.tech/).

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start the local development server |
| `yarn build` | Build the production Next.js bundle |
| `yarn start` | Run the production build locally |
| `yarn lint` | Run ESLint |
| `yarn deploy` | Build, export, and upload to IPFS via thirdweb |

---

## 📄 License

This project is licensed under the terms specified in [LICENSE.md](./LICENSE.md).