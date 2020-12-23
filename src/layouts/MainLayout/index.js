import React from 'react';
import Navbar from '../../components/Navbar';

import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
