import React from 'react';
import styles from './card.module.css';

const Card = ({ title, thumbnailUrl, url }) => {
    return (
        <section className={styles.card}>
            <a href={url}>
                <img src={thumbnailUrl} alt={title}></img>
            </a>
            <div className={styles.title}>
                {title}
            </div>
        </section>
    )
}

export default Card