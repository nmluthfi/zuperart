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
                  href="#"
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
