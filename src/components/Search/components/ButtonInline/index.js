import React from 'react';
import styles from './ButtonInline.css';

function ButtonInline({ onClick, children }) {
  return (
    <button className={styles.buttonInline} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonInline;
