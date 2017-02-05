/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import Counter from './components/Counter/Counter';
import Range from './components/InputRange/Range';
import DateInput from './components/DateInput/DateInput';

// import { EnhanceDropdown as enhancer } from './components/FilterDropdown/EnhanceDropdown';
// import { FilterDropdown } from './components/FilterDropdown/FilterDropdown';

// const EnhancedDropdown = enhancer(FilterDropdown);

class Search extends Component {
  render() {
    const {
      counter, increment, decrement,
      dateInput, setDates,
      rangeInput, setRange,
    } = this.props;
    return (
      <div>
        <div className={styles.search}>
          <ul className="list-inline">
            <li>
              <DateInput
                dates={dateInput.dates}
                disabled={dateInput.disabled}
                setDates={range => setDates(range)}
              />
            </li>
            <li>
              <Counter
                counter={counter}
                decrement={value => decrement(value)}
                increment={value => increment(value)}
              />
            </li>
            <li>
              <Range
                range={rangeInput.range}
                setRange={range => setRange(range)}
              />
            </li>
            <li className={styles.modal}>
              <Link to="/extension">
                <p>
                  <i className="glyphicon glyphicon-filter" /> More Filters
                  <i className="glyphicon glyphicon-menu-down" />
                </p>
              </Link>
            </li>
            <li>
              <button>
                <p>
                  <Link to="/extension">
                    <i className={`${styles.different} glyphicon glyphicon-map-marker`} /> MAP VIEW
                  </Link>
                </p>
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.landing}>

          {this.props.children || 'Welcome to Landing'}

        </div>

      </div>
    );
  }
}

export default Search;
