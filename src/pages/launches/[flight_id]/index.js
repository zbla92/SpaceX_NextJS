import React from 'react';
import Flight from '../../../components/Flight';
import MainLayout from '../../../layouts/MainLayout';
import getData from '../../../utils/graphQLClient';

export default function LaunchPage({ data, error }) {
  console.log(data);
  return (
    <MainLayout>
      <Flight flight={data.launch} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  console.log(query, 'KVERU');

  const { data, error } = await getData(`{
    launch(id: "${query.flight_id}") {
      id
      flight_number
      name
      success
      details
      date_unix
      links {
          youtube_id
        }
        cores{
            flight
            reused
            landing_attempt
            landing_success
        }
    }
  }`);

  return {
    props: { data, error: error || false },
  };
}
