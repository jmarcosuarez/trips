import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button';
import FilterList from '../../components/FilterList';
import Title from '../../components/Title';
import styles from './NoticeBar.css';

const NoticeBar = ({ onFilterSend, onFilterCancel, currentFilters, onDeleteFilterItem }) =>
  <div className={`${styles.noticeBar} clearfix`}>
    <Title title={'Notice Bar Title'} />
    <div className={styles.button}>
      <Link onClick={() => onFilterCancel()} to="/list">
        Cancel
      </Link>
      {' '}
      <Link onClick={() => onFilterSend()}>
        <Button
          placeholder="See Homes"
        />
      </Link>
    </div>
    <div className={styles.filters}>
      <FilterList
        currentFilters={currentFilters}
        onDeleteFilterItem={(item) => onDeleteFilterItem(item)}
      />
    </div>
  </div>;

NoticeBar.propTypes = {
  onFilterSend: PropTypes.func.isRequired,
  onFilterCancel: PropTypes.func.isRequired,
  onDeleteFilterItem: PropTypes.func.isRequired,
  // currentFilters: PropTypes.func.isRequired,
};

export default NoticeBar;
