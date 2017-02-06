import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button';

import styles from './NoticeBar.css';

const NoticeBar = ({ onFilterSend, onFilterCancel }) =>
  <div className={styles.noticeBar}>
    <ul>
      <li>Notice Bar</li>
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
  </div>;

NoticeBar.propTypes = {
  onFilterSend: PropTypes.func.isRequired,
  onFilterCancel: PropTypes.func.isRequired,
};

export default NoticeBar;
