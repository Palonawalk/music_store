import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faLocationDot, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
  return (

    <header className={styles.container} >
      <title>Next.js App</title>
      <div className={styles.topContainer} >
        <div className={styles.burgerStyle} >
          <Link className={styles.hoverIcons} href="/"> <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} /></Link>
        </div>

        <h1 className={styles.headerBar} >MUSIC STORE</h1>


        <div className={styles.iconStyle} >
          <Link href="/" className={styles.hoverIcons} ><FontAwesomeIcon icon={faUserLarge} style={{ color: "#ffffff", }} /></Link>
          <Link href="/" className={styles.hoverIcons} ><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} /></Link>
          <Link href="/" className={styles.hoverIcons} ><FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff", }} /></Link>
        </div>
      </div>
      <div className={styles.bottomContainer} >
        <div className={styles.titleBottom} >
          <p className={styles.p1} > PHANTOM</p>
          <p className={styles.p2} > IMPLOSIVE SOUND</p>
        </div>
        <div className={styles.buttonSty} >
          <button className={styles.discoverButton} >DISCOVER</button>
          <button className={styles.buyButton} >BUY</button>
        </div>
      </div>

    </header>
  );
}

