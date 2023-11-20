// components/Footer.tsx

import React from 'react';
import styles from './Footer.module.css'; // Import your footer styles here
import Link from 'next/link';

const addSpaceAfterPeriods = (text: string) => {
    // Use a regular expression to add a space after each period.
    return text.replace(/\./g, '. ');
};

const Footer: React.FC = () => {
    const text = "Please be aware that ZuperArt is an experimental product by the ZuperHunt team. Use our platform with caution and always take appropriate measures to safeguard your assets.";

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <p>
                        {addSpaceAfterPeriods(text)}
                        {' '}
                        {addSpaceAfterPeriods("Join our ")}
                        <Link href="https://t.co/n7TeWVlA48" className={styles.link}>Community</Link>
                        {addSpaceAfterPeriods(" for support. © 2023. ")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
