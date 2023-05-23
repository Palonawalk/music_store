import React from "react";
import styles from '../styles/Articles.module.css';

export default function Articles(props) {

    const bg = props.url

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className={styles.articleInfos}>
            <p className={styles.nameArticle}>{props.nameArticle}</p>
            <p className={styles.descArticle}>{props.descArticle}</p>
            <button className={styles.discoverButton}>DISCOVER</button>
        </div>
    )
}