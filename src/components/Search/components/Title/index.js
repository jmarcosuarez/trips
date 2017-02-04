import React from 'react';
import styles from './Title.css';

const Title = ({ title = '' }) =>
  <div className={styles.title}>
    <ul>
      <li>{title}</li>
    </ul>
  </div>;

export default Title;
