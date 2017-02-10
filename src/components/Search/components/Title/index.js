import React from 'react';
import styles from './Title.css';

const Title = ({ title = '' }) =>
  <div className={styles.title}>
    <div>
      <h4>{title}</h4>
    </div>
  </div>;

export default Title;
