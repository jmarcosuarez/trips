import React from 'react';
import { Link } from 'react-router';
import styles from './Extension.css';

const Extension = () =>
  <div className={styles.extension}>
    <p>This is the bigger big extension filter</p>
    <button><Link to="/search">Back to Search</Link></button>
    <p>Written by <a href="https://twitter.com/jmarcosuarez">@jmarcosuarez</a></p>
    <p>Code in <a href="https://github.com/jmarcosuarez/agenda">Contacts</a></p>
  </div>;

export default Extension;
