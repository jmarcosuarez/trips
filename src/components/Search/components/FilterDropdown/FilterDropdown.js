/**
 * Stateless FilterDropdown
 * @param props
 * @constructor
 */

import React from 'react';
import styles from './FilterDropdown.css';

export const FilterDropdown = (props) => (
  <div className={styles.dropdown}>
    <button onClick={props.onToggle}>
      Option: {props.data[props.optionSelected]}
    </button>
    <div className={props.isOpen ? styles.active : null}>
      ola que ase
    </div>
  </div>
);
