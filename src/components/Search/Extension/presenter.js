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
    incrementBedroom,
    decrementBedroom,
    checkboxGroup,
    setCheckbox,
    perfectOption,
    setSelectedOption,
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
        setSelectedOption={option => setSelectedOption(option)}
        bedroom={bedroom}
        decrementBedroom={value => decrementBedroom(value)}
        incrementBedroom={value => incrementBedroom(value)}
        instantBookCheckbox={instantBookCheckbox}
        onInstantBookToggle={value => onInstantBookToggle(value)}
      />

      <CheckboxGroup
        title="neighborhoods"
        checkboxGroup={checkboxGroup.get('neighborhoods')}
        setCheckbox={(checkboxName, checkboxGroupName) => setCheckbox(checkboxName, checkboxGroupName)}
      />

      <CheckboxGroup
        title="amenities"
        checkboxGroup={checkboxGroup.get('amenities')}
        setCheckbox={(checkboxName, checkboxGroupName) => setCheckbox(checkboxName, checkboxGroupName)}
      />

      <CheckboxGroup
        title="propertyType"
        checkboxGroup={checkboxGroup.get('propertyType')}
        setCheckbox={(checkboxName, checkboxGroupName) => setCheckbox(checkboxName, checkboxGroupName)}
      />

      {/* <EnhancedDropdown
              optionSelected={data.optionSelected}
              onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
              data={data.data}
            />   */}
    </div>;

NoticeBar.propTypes = {
  bedroom: PropTypes.number,
  incrementBedroom: PropTypes.func,
  decrementBedroom: PropTypes.func,
  checkboxGroup: PropTypes.string,
  setCheckbox: PropTypes.func,
  perfectOption: PropTypes.string,
  setSelectedOption: PropTypes.func,
  onFilterSend: PropTypes.func,
  onFilterCancel: PropTypes.func,
  instantBookCheckbox: PropTypes.bool,
  onInstantBookToggle: PropTypes.func,
};

export default Extension;
