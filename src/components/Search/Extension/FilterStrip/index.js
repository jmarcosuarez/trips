import React, { PropTypes } from 'react';
import Title from '../../components/Title';
import Checkbox from '../../components/Checkbox';
import styles from './FilterStrip.css';

const FilterStrip = ({ title, filters, setFilters }) =>
  <div className={styles.filterStrip}>
    <ul>
      <li>
        <Title
          title={title}
        />
      </li>
      {
        filters.map((value, key) =>
          <li>
            <Checkbox
              key={key}
              label={value.get('storeId')}
              checked={value.get('initial')}
              checkboxChange={setFilters}
            />
          </li>
        )
      }
      <li>
        <i className="glyphicon glyphicon-menu-down" />
      </li>
    </ul>
  </div>;

export default FilterStrip;
