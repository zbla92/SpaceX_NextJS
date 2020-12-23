import React from 'react';

import Launches from '../components/Launches';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Launches />
    </MainLayout>
  );
}
