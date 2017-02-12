import React, { PropTypes } from 'react';
import ButtonInline from '../ButtonInline';

import styles from './FilterList.css';

function FilterlistItem({ item, onClick }) {
  return (
    <li>
      <ButtonInline onClick={() => onClick(item)}>
        {item}
      </ButtonInline>
    </li>
  );
}

const FilterList = ({ currentFilters, onDeleteFilterItem }) =>
  <div className={styles.filterList}>
    <ul>
      {
        currentFilters.map((value, key) => {
          return <FilterlistItem key={key} item={key} onClick={onDeleteFilterItem} />;
        })
      }
    </ul>
  </div>;

FilterList.propTypes = {
  // currentFilters: PropTypes.node,
  onDeleteFilterItem: PropTypes.func,
};

export default FilterList;
