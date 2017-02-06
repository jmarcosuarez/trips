/* eslint react/prefer-stateless-function: 0 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import Counter from './components/Counter/Counter';
import Range from './components/InputRange/Range';
import DateInput from './components/DateInput/DateInput';

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
                dates={dateInput}
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
                range={rangeInput.get('range')}
                setRange={range => setRange(range)}
              />
            </li>
            <li>
              <Link to="/extension">
                <p>
                  <i className="glyphicon glyphicon-filter" /> More Filters
                  <i className="glyphicon glyphicon-menu-down" />
                </p>
              </Link>
            </li>
            <li>
              <Link to="/list">
                <p>
                  <i className="glyphicon glyphicon-map-marker" /> MAP VIEW
                </p>
              </Link>
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

Search.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  // dateInput: PropTypes.object,
  setDates: PropTypes.func.isRequired,
  // rangeInput: PropTypes.object,
  setRange: PropTypes.func.isRequired,
};

export default Search;
