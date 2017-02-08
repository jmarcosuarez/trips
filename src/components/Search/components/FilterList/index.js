import React, { PropTypes } from 'react';
import ButtonInline from '../ButtonInline';

import styles from './FilterList.css';

function PlaylistItem({ value }) {
  return (
    <li>
      <ButtonInline>
        {`${value.get('id')}: ${value.get('value')}`}
      </ButtonInline>
    </li>
  );
}

const FilterList = ({ currentFilters }) =>
  <div className={styles.filterList}>
    <ul>
      {
        currentFilters.map((value, key) => {
          return <PlaylistItem value={value} />;
        })
      }
    </ul>
  </div>;

FilterList.propTypes = {
  // currentFilters: PropTypes.string,
};

export default FilterList;
