/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import Counter from './components/Counter/Counter';
import Range from './components/InputRange/Range';
import DateInput from './components/DateInput/DateInput';

import { EnhanceDropdown as enhancer } from './components/FilterDropdown/EnhanceDropdown';
import { FilterDropdown } from './components/FilterDropdown/FilterDropdown';

const EnhancedDropdown = enhancer(FilterDropdown);

class Search extends Component {
// function Search({ data = [], counter, increment, decrement, onClick }) {
  render() {
    const { data = [], counter, increment, decrement, onClick } = this.props;
    return (
      <div>
        <div className={styles.search}>
          <ul className="list-inline">
            <li>
              <DateInput />
            </li>
            <li>
              <Counter
                counter={counter}
                decrement={value => decrement(value)}
                increment={value => increment(value)}
              />
            </li>
            <li>
              <Range />
            </li>
            <li className={styles.modal}>
              <EnhancedDropdown
                optionSelected={data.optionSelected}
                onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
                data={data.data}
              />
              { /* <button>
                <p>
                  <i className="glyphicon glyphicon-filter" /> More Filters
                  <i className="glyphicon glyphicon-menu-down" />
                </p>
              </button> */ }
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
          { /* <ul className="list-inline">
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
          </ul>*/}
        </div>

        {/* <EnhancedDropdown
            optionSelected={data.optionSelected}
            onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
            data={data.data}
          />   */}

        <div className={styles.landing}>

          {this.props.children || 'Welcome to Landing'}

        </div>

      </div>
    );
  }
}

export default Search;
