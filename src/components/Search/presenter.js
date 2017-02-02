import React from 'react';
import styles from './styles.css';
import Counter from './components/Counter/Counter';
import Range from './components/InputRange/Range';
import DateInput from './components/DateInput/DateInput';

import { EnhanceDropdown as enhancer } from './components/Dropdown/EnhanceDropdown';
import { Dropdown } from './components/Dropdown/Dropdown';

const EnhancedDropdown = enhancer(Dropdown);

function Search({ data = [], onClick }) {
  return (
    <div>
      <div className={styles.search}>
        <ul className="list-inline">
          <li>
            <p><i className="glyphicon glyphicon-calendar" /> When? <i className="glyphicon glyphicon-menu-down" /></p>
          </li>
          <li>
            <p><i className="glyphicon glyphicon-user" /> You+1 <i className="glyphicon glyphicon-menu-down" /></p>
          </li>
          <li>
            <p>Have a budget ? <i className="glyphicon glyphicon-menu-down" /></p>
          </li>
          <li>
            <p>
              <i className="glyphicon glyphicon-filter" /> More Filters
              <i className="glyphicon glyphicon-menu-down" />
            </p>
          </li>
          <li>
            <p><i className={`${styles.different} glyphicon glyphicon-map-marker`} /> MAP VIEW</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>Input Range</h4>
        <Range />
        <h4>Enhanced Dropdown</h4>
        <EnhancedDropdown
          optionSelected={data.optionSelected}
          onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
          data={data.data}
        />
        <Counter />
        <h4>DateInput</h4>
        <DateInput />
      </div>
    </div>
  );
}

export default Search;
