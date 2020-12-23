import React from 'react';

import hero from '../../../public/imgs/sentinel.jpg';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img src={hero} alt='hero' className={styles.hero_image} />
      <div className={styles.hero_overlay} />
      <div className={styles.content}>
        <h2>SPACEX LAUNCHES</h2>
        <p
          onClick={() => {
            if (process.browser)
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
          }}
        >
          Find Out More
        </p>
      </div>
    </div>
  );
}
