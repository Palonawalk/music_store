import React from 'react'
import styles from '../styles/TopArticle.module.css';
import Image from 'next/image';

function TopArticle() {
  return (
    <div>
        <p className={styles.p1} >LATEST LAUNCH</p>
        <p className={styles.p1} ><span className={styles.bold} >DIONE SOUNDBAR</span></p>
        <div>
            <Image className={styles.imageSoundbar} src="/image/soundbar.png" alt='soundbar' width={900} height={250} />
            <button className={styles.discoverButton} >DISCOVER</button>
        </div>
    </div>
  )
}

export default TopArticle