import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import dateInput from './dateInput';
import checkboxGroup from './checkboxGroup';
import rangeInput from './rangeInput';
import perfectOption from './perfectOption';
import bedroom from './bedroom';
import filter from './filter';
import instantBookCheckbox from './instantBookCheckbox';

export default combineReducers({
  counter,
  dateInput,
  checkboxGroup,
  rangeInput,
  perfectOption,
  bedroom,
  filter,
  instantBookCheckbox,
  routing: routerReducer,
});
