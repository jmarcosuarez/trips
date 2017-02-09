/* eslint react/prefer-stateless-function: 0 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import Counter from './components/Counter/Counter';
import Range from './components/InputRange/Range';
import DateInput from './components/DateInput/DateInput';
import ButtonGhost from './components/ButtonGhost';

class Search extends Component {
  render() {
    const {
      counter, increment, decrement,
      dateInput, onSetDates,
      rangeInput, setRange,
    } = this.props;
    return (
      <div>
        <div className={styles.search}>
          <ButtonGhost>
            <DateInput
              dates={dateInput}
              onSetDates={range => onSetDates(range)}
            />
          </ButtonGhost>

          <ButtonGhost>
            <Counter
              counter={counter}
              decrement={value => decrement(value)}
              increment={value => increment(value)}
            />
          </ButtonGhost>

          <ButtonGhost>
            <Range
              range={rangeInput.get('range')}
              setRange={range => setRange(range)}
            />
          </ButtonGhost>

          <ButtonGhost>
            <Link to="/extension">
              <div className={styles.menu}>
                <i className="glyphicon glyphicon-filter" /> More Filters
                <span><i className="glyphicon glyphicon-menu-down" /></span>
              </div>
            </Link>
          </ButtonGhost>

          <ButtonGhost>
            <Link to="/list">
              <div className={styles.menu}>
                <span className={styles.mapViewBtn}><i className="glyphicon glyphicon-map-marker" /> MAP VIEW</span>
              </div>
            </Link>
          </ButtonGhost>
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
  onSetDates: PropTypes.func.isRequired,
  // rangeInput: PropTypes.object,
  setRange: PropTypes.func.isRequired,
};

export default Search;
