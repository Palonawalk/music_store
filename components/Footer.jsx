import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer} >
        <Link href="/" >ABOUT</Link>
        <Link href="/" >CONTACT</Link>
        <Link href="/" >SUPPORT</Link>
        <Link href="/" >STORES</Link>
    </div>
  )
}

export default Footer