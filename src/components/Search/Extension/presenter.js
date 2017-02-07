import React, { PropTypes } from 'react';
import CheckboxGroup from './CheckboxGroup';
import NoticeBar from './NoticeBar';
import OptionsBar from './OptionsBar';

// import { EnhanceDropdown as enhancer } from './components/FilterDropdown/EnhanceDropdown';
// import { FilterDropdown } from './components/FilterDropdown/FilterDropdown';

// const EnhancedDropdown = enhancer(FilterDropdown);

import styles from './Extension.css';

const Extension = (
  {
    bedroom,
    onIncrementBedroom,
    onDecrementBedroom,
    checkboxGroup,
    onSetCheckboxGroupItem,
    perfectOption,
    onSetPerfectOption,
    onFilterSend,
    onFilterCancel,
    instantBookCheckbox,
    onInstantBookToggle,
  }) =>

    <div className={styles.extension}>

      <NoticeBar
        onFilterSend={() => onFilterSend()}
        onFilterCancel={() => onFilterCancel()}
      />

      <OptionsBar
        perfectOption={perfectOption}
        onSetPerfectOption={option => onSetPerfectOption(option)}
        bedroom={bedroom}
        onDecrementBedroom={value => onDecrementBedroom(value)}
        onIncrementBedroom={value => onIncrementBedroom(value)}
        instantBookCheckbox={instantBookCheckbox}
        onInstantBookToggle={value => onInstantBookToggle(value)}
      />

      <CheckboxGroup
        title="neighborhoods"
        checkboxGroup={checkboxGroup.get('neighborhoods')}
        onSetCheckboxGroupItem={
          (checkboxName, checkboxGroupName) => onSetCheckboxGroupItem(checkboxName, checkboxGroupName)
        }
      />

      <CheckboxGroup
        title="amenities"
        checkboxGroup={checkboxGroup.get('amenities')}
        onSetCheckboxGroupItem={
          (checkboxName, checkboxGroupName) => onSetCheckboxGroupItem(checkboxName, checkboxGroupName)
        }
      />

      <CheckboxGroup
        title="propertyType"
        checkboxGroup={checkboxGroup.get('propertyType')}
        onSetCheckboxGroupItem={
          (checkboxName, checkboxGroupName) => onSetCheckboxGroupItem(checkboxName, checkboxGroupName)
        }
      />

      {/* <EnhancedDropdown
              optionSelected={data.optionSelected}
              onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
              data={data.data}
            />   */}
    </div>;

NoticeBar.propTypes = {
  bedroom: PropTypes.number,
  onIncrementBedroom: PropTypes.func,
  onDecrementBedroom: PropTypes.func,
  checkboxGroup: PropTypes.string,
  onSetCheckboxGroupItem: PropTypes.func,
  perfectOption: PropTypes.string,
  onSetPerfectOption: PropTypes.func,
  onFilterSend: PropTypes.func,
  onFilterCancel: PropTypes.func,
  instantBookCheckbox: PropTypes.bool,
  onInstantBookToggle: PropTypes.func,
};

export default Extension;
