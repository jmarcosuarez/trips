/* eslint react/prefer-stateless-function: 0 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import GuestCounter from './components/GuestCounter';
import Range from './components/InputRange';
import DateInput from './components/DateInput/DateInput';
import MenuItem from './components/MenuItem';

class Search extends Component {
  render() {
    const {
      guestCounter, onIncrementGuest, onDecrementGuest,
      dateInput, onSetDates,
      rangeInput, onSetPriceRange, onSavePriceRange,
    } = this.props;
    return (
      <div>
        <div className={styles.search}>
          <MenuItem>
            <DateInput
              dates={dateInput}
              onSetDates={range => onSetDates(range)}
            />
          </MenuItem>

          <MenuItem>
            <GuestCounter
              guestCounter={guestCounter}
              onDecrementGuest={value => onDecrementGuest(value)}
              onIncrementGuest={value => onIncrementGuest(value)}
            />
          </MenuItem>

          <MenuItem>
            <Range
              range={rangeInput}
              onSetPriceRange={range => onSetPriceRange(range)}
              onSavePriceRange={range => onSavePriceRange(range)}
            />
          </MenuItem>

          <MenuItem>
            <Link to="/extension">
              <div className={styles.menu}>
                <i className="glyphicon glyphicon-filter" /> More Filters
                <span><i className="glyphicon glyphicon-menu-down" /></span>
              </div>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/list">
              <div className={styles.menu}>
                <span className={styles.mapViewBtn}><i className="glyphicon glyphicon-map-marker" /> MAP VIEW</span>
              </div>
            </Link>
          </MenuItem>
        </div>

        <div className={styles.landing}>

          {this.props.children || 'Welcome to Landing'}

        </div>
      </div>
    );
  }
}

Search.propTypes = {
  // guestCounter: PropTypes.number.isRequired,
  onIncrementGuest: PropTypes.func.isRequired,
  onDecrementGuest: PropTypes.func.isRequired,
  // dateInput: PropTypes.object,
  onSetDates: PropTypes.func.isRequired,
  // rangeInput: PropTypes.object,
  onSetPriceRange: PropTypes.func.isRequired,
  onSavePriceRange: PropTypes.func.isRequired,
};

export default Search;
