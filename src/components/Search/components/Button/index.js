import React from 'react';
import styles from './Button.css';

function Button({ placeholder }) {
  return (
    <button className={`${styles.button} btn btn-lg btn-default`}>{placeholder}</button>
  );
}

export default Button;
