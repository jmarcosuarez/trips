import React from 'react';
import styles from './List.css';

const List = () =>
  <div>
    <div className={styles.toolbar}>
      <ul>
        <li>Notice Bar</li>
      </ul>
    </div>
    <div className={styles.main}>
      <p>Temporary List component for testing</p>
      <p>Written by <a href="https://twitter.com/jmarcosuarez">@jmarcosuarez</a></p>
      <p>Code in <a href="https://github.com/jmarcosuarez/agenda">Contacts</a></p>
    </div>
  </div>;

export default List;
