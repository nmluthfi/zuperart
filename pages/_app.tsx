import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import Footer from '../components/Footer/Footer'; // Adjust the import path as needed


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={{
        name: "ZuperChain",
        chainId: 3974892, // Replace with the actual chain ID of your custom network
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
        faucets: ["https://discord.com/invite/dymension"]
      }}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        walletConnect(),
      ]}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
