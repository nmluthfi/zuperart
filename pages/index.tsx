import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          {/* <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1980}
                height={1280}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div> */}
          {/* <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div> */}
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Welcome to ZuperArt.
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your gateway to a world of digital creativity, where artists and collectors unite to buy, sell, and trade unique NFT masterpieces.
              </p>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  start now
                </Link>
                {/* <Link
                  className={styles.secondaryCta}
                  href="https://github.com/thirdweb-example/marketplace-v3"
                  target="_blank"
                >
                  Join our community
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
