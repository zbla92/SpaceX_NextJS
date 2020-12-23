/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

import logo from '../../../public/logo.png';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <div className={styles.center}>
        <Link href={`/launches`}>
          <a>Launches</a>
        </Link>
        <a>Vehicles</a>
        <a>Capsuls</a>
        <a>Missions</a>
      </div>
      <div className={styles.right}>Order Now</div>
    </div>
  );
}
