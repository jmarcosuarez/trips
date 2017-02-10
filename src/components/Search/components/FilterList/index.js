import React, { PropTypes } from 'react';
import ButtonInline from '../ButtonInline';

import styles from './FilterList.css';

function FilterlistItem({ item }) {
  return (
    <li>
      <ButtonInline>
        {item.get('id')}
      </ButtonInline>
    </li>
  );
}

const FilterList = ({ currentFilters }) =>
  <div className={styles.filterList}>
    <ul>
      {
        currentFilters.filter(i => i.get('active')).map((value, key) => {
          return <FilterlistItem key={key} item={value} />;
        })
      }
    </ul>
  </div>;

FilterList.propTypes = {
  // currentFilters: PropTypes.instanceOf(FilterList),
};

export default FilterList;
