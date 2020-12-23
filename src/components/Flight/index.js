import React from 'react';
import { formatDate } from '../../utils/helpers';

import successImg from '../../../public/imgs/success.svg';
import failImg from '../../../public/imgs/fail.png';
import styles from './Flight.module.scss';

export default function Flight({ flight }) {
  console.log(flight);
  return (
    <div className={styles.flight}>
      <div className={styles.content}>
        <h2 className={styles.mission_name}>{flight.name}</h2>
        <h5>
          Launch date: {formatDate(flight.date_unix * 1000, false, false, true)}
        </h5>

        <div className={styles.flight_content}>
          <div className={styles.flight_content_left}>
            <div className={styles.success_item}>
              <span className={styles.success_type}>Mission: </span>
              <img
                src={flight.success ? successImg : failImg}
                alt='success'
                className={styles.success_img}
              />
            </div>
            <div className={styles.success_item}>
              <span className={styles.success_type}>Landing attempt: </span>
              <img
                src={flight.cores[0].landing_attempt ? successImg : failImg}
                alt='success'
                className={styles.success_img}
              />
            </div>
            <div className={styles.success_item}>
              <span className={styles.success_type}>Landing success: </span>
              <img
                src={flight.cores[0].landing_success ? successImg : failImg}
                alt='success'
                className={styles.success_img}
              />
            </div>
            <div className={styles.success_item}>
              <span className={styles.success_type}>Booster reused: </span>
              <img
                src={flight.cores[0].reused ? successImg : failImg}
                alt='success'
                className={styles.success_img}
              />
            </div>
          </div>
          <div className={styles.flight_content_right}>
            <p className={styles.details}>{flight?.details}</p>
          </div>
        </div>
      </div>{' '}
      <iframe
        id={flight?.links?.youtube_id}
        title='Launch'
        className={styles.video}
        src={`//www.youtube.com/embed/${flight?.links?.youtube_id}?autoplay=1&loop=1&mute=1&disablekb=1`}
      ></iframe>
    </div>
  );
}
