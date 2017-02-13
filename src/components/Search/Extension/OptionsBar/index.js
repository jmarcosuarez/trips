import React from 'react';
import styles from './OptionsBar.css';
import Bedroom from '../../components/Bedroom';
import Checkbox from '../../components/Checkbox';
import Title from '../../components/Title';

import { EnhanceDropdown as enhancer } from '../../components/FilterDropdown/EnhanceDropdown';
import { Dropdown } from '../../components/Dropdown';

const EnhancedDropdown = enhancer(Dropdown);

const OptionsBar = ({ perfectOption = [], bedroom, onIncrementBedroom, onDecrementBedroom,
  onSetPerfectOption, instantBookCheckbox, onInstantBookToggle }) =>
    <div className={styles.optionsBar}>
      <ul>
        <li>
          <Title
            title="More Options"
          />
        </li>
        <li>
          <EnhancedDropdown
            onSelect={option => onSetPerfectOption(option)}
            data={perfectOption}
          />
        </li>
        <li>
          <Bedroom
            bedroom={bedroom}
            decrementBedroom={value => onDecrementBedroom(value)}
            incrementBedroom={value => onIncrementBedroom(value)}
          />
        </li>
        <li>
          <Checkbox
            label={instantBookCheckbox.get('storeId')}
            checked={instantBookCheckbox.get('initial')}
            checkboxChange={option => onInstantBookToggle(option)}
          />
        </li>
      </ul>
    </div>;

export default OptionsBar;
