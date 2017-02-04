import React from 'react';
import styles from './OptionsBar.css';
import Counter from '../../components/Counter/Counter';
import Checkbox from '../../components/Checkbox';
import Title from '../../components/Title';

import { EnhanceDropdown as enhancer } from '../../components/FilterDropdown/EnhanceDropdown';
import { Dropdown } from '../../components/Dropdown';

const EnhancedDropdown = enhancer(Dropdown);

const OptionsBar = ({ perfectOption = [], counter, increment, decrement, setSelectedOption }) =>
  <div className={styles.optionsBar}>
    <ul>
      <li>
        <Title
          title="More Options"
        />
      </li>
      <li>
        <EnhancedDropdown
          // optionSelected={perfectOption.get('optionSelected')}
          onSelect={option => setSelectedOption(option)}
          data={perfectOption}
        />
      </li>
      <li>
        <Counter
          counter={counter}
          decrement={value => decrement(value)}
          increment={value => increment(value)}
        />
      </li>
      <li>
        <Checkbox
          label="TestLabel"
          checked
          checkboxChange={() => checkboxChange()}
        />
      </li>
    </ul>
  </div>;

export default OptionsBar;
