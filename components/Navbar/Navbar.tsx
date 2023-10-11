import { ConnectWallet, useAddress, ThirdwebProvider, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={195}
              height={32}
              alt="ZUPERART's logo"
            />
          </Link>
        </div>

        <div className={styles.navMiddle}>
          <Link href="https://zuperdrop.vercel.app/" className={styles.link}>
            Claim
          </Link>
          <Link href="/buy" className={styles.link}>
            Buy
          </Link>
          <Link href="/sell" className={styles.link}>
            Sell
          </Link>
          <Link href="#" className={styles.link}>
            Stake
          </Link>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            {/* <ConnectWallet theme="dark" btnTitle="Connect Wallet" /> */}
            <ConnectWallet
              theme={"dark"}
              btnTitle={"Connect Wallet"}
              modalTitle={"Choose your wallet"}
              switchToActiveChain={true}
              modalSize={"wide"}
              welcomeScreen={{
                img: {
                  src: "https://i.imgur.com/cC6aQ9P.png",
                  width: 350,
                  height: 350,
                },
                subtitle:
                  "Explore the limitless possibilities of art ownership with ZuperArt, the premier NFT Marketplace for creators and collectors on worldwide",
                title: "Welcome to ZuperArt",
              }}
              modalTitleIconUrl={
                "https://i.imgur.com/dXXyOyO.png"
              }
            />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
