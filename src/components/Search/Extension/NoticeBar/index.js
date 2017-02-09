import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button';
import FilterList from '../../components/FilterList';

import styles from './NoticeBar.css';

const NoticeBar = ({ onFilterSend, onFilterCancel, currentFilters }) =>
  <div className={`${styles.noticeBar} clearfix`}>
    <ul className={styles.button}>
      <li>
        <Link onClick={() => onFilterCancel()} to="/list">
          Cancel
        </Link>
      </li>
      <li>
        <Link onClick={() => onFilterSend()}>
          <Button
            placeholder="See Homes"
          />
        </Link>
      </li>
    </ul>
    <FilterList currentFilters={currentFilters} />
  </div>;

NoticeBar.propTypes = {
  onFilterSend: PropTypes.func.isRequired,
  onFilterCancel: PropTypes.func.isRequired,
  // currentFilters: PropTypes.func.isRequired,
};

export default NoticeBar;
