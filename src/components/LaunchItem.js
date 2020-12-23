/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import successImg from '../../public/imgs/success.svg';
import failImg from '../../public/imgs/fail.png';

import styles from './LaunchItem.module.scss';
import { formatDate } from '../utils/helpers';

export default function LaunchItem({ flight }) {
  return (
    <div className={styles.card}>
      <div className={styles.left_container}>
        <div>
          <h3 className={styles.mission_name}>Mission: {flight.name}</h3>
          <h4 className={styles.header_3}>
            Flight - <span>{flight.flight_number}</span>
          </h4>
        </div>

        <div className={styles.success_section}>
          <div className={styles.flight_success}>
            {flight.upcoming ? (
              <p className={styles.scheduled_for}>
                Scheduled for{' '}
                {formatDate(flight.date_unix * 1000, false, false, true)}
              </p>
            ) : (
              <>
                <span>Mission Success:</span>
                <img
                  src={flight.success ? successImg : failImg}
                  alt='success'
                  className={styles.success_img}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.right_container}>
        <Link href={`/launches/${flight.id}`}>
          <a className='button_primary'>
            <h4>Launch Details</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}
