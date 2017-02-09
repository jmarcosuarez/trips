import React from 'react';
import styles from './ButtonGhost.css';

function ButtonGhost({ onClick, isSmall, children }) {
  return (
    <button className={styles.buttonGhost} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonGhost;
