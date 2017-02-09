import React from 'react';
import styles from './MenuItem.css';

function MenuItem({ children }) {
  return (
    <div className={styles.menuItem}>
      {children}
    </div>
  );
}

export default MenuItem;
