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
      {props.data.getIn(['options', props.data.get('optionSelected'), 'value'])}
    </button>
    <ul className={props.isOpen ? styles.active : null}>
      {
        props.data.get('options').map((item, i) => {
          return (
            <li
              key={i}
              className={i === props.data.get('optionSelected') ? styles.selected : null}
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
