/**
 * Stateless Dropdown
 * @param props
 * @constructor
 */

import React from 'react';
import styles from './Dropdown.css';

export const Dropdown = (props) => (
  <div className={styles.dropdown}>
    <button onClick={props.onToggle}>
      Selected option: {props.data[props.optionSelected]}
    </button>
    <ul className={props.isOpen ? styles.active : null}>
      {
        props.data.map((item, i) => {
          return (
            <li
              key={i}
              className={i === props.optionSelected ? styles.selected : null}
              onClick={() => props.onSelect(i)}
            >
              {item}
            </li>
          );
        })
      }
    </ul>
  </div>
);
