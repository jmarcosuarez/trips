import React from 'react';
import styles from './NoticeBar.css';

const NoticeBar = () =>
  <div className={styles.noticeBar}>
    <ul>
      <li>Notice Bar</li>
      <li><a href="/search">Cancel</a></li>
      <li><button>See Homes</button></li>
    </ul>
  </div>;

export default NoticeBar;
