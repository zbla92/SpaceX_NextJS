import React from 'react';

import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import Hero from './Hero';

import styles from './Launches.module.scss';

const LAUNCH_QUERY = gql`
  query LaunchQuery {
    launches {
      id
      flight_number
      name
      success
      upcoming
      date_unix
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY);

  return (
    <div>
      <Hero />
      <div className={styles.launches_container}>
        {loading ? (
          <span>LOADING ...</span>
        ) : (
          <>
            {data?.launches?.map((flight) => (
              <LaunchItem flight={flight} key={flight.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
