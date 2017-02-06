import React, { PropTypes } from 'react';
import Title from '../../components/Title';
import Checkbox from '../../components/Checkbox';
import styles from './CheckboxGroup.css';

const CheckboxGroup = ({ title, checkboxGroup, setCheckbox }) =>
  <div className={styles.checkboxGroup}>
    <ul>
      <li>
        <Title
          title={title}
        />
      </li>
      {
        checkboxGroup.map((value) =>
          <li>
            <Checkbox
              key={value.get('storeId')}
              label={value.get('storeId')}
              group={title}
              checked={value.get('initial')}
              checkboxChange={setCheckbox}
            />
          </li>
        )
      }
      <li>
        <i className="glyphicon glyphicon-menu-down" />
      </li>
    </ul>
  </div>;

export default CheckboxGroup;
