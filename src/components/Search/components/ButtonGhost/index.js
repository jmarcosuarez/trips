import React from 'react';
import styles from './ButtonGhost.css';

function ButtonGhost({ onClick, isSmall, children }) {
  return (
    <div className={styles.buttonGhost}>
      {children}
    </div>
  );
}

export default ButtonGhost;
