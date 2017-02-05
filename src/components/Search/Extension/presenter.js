import React from 'react';
import { Link } from 'react-router';
import FilterStrip from './FilterStrip';
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
    onClick,
    filters,
    setFilters,
    perfectOption,
    setSelectedOption,
  }) =>

    <div className={styles.extension}>

      <NoticeBar />

      <OptionsBar
        perfectOption={perfectOption}
        setSelectedOption={option => setSelectedOption(option)}
        bedroom={bedroom}
        decrementBedroom={value => decrementBedroom(value)}
        incrementBedroom={value => incrementBedroom(value)}
      />

      <FilterStrip
        title="neighborhoods"
        filters={filters.get('neighborhoods')}
        setFilters={filter => setFilters(filter)}
      />

      <FilterStrip
        title="amenities"
        filters={filters.get('amenities')}
        setFilters={filter => setFilters(filter)}
      />

      <FilterStrip
        title="property type"
        filters={filters.get('propertyType')}
        setFilters={filter => setFilters(filter)}
      />

      {/* <EnhancedDropdown
              optionSelected={data.optionSelected}
              onSelect={option => onClick(option)} // option => this.setState({ optionSelected: option })
              data={data.data}
            />   */}
    </div>;

export default Extension;
