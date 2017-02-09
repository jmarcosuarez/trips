import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import guestCounter from './guestCounter';
import dateInput from './dateInput';
import checkboxGroup from './checkboxGroup';
import rangeInput from './rangeInput';
import perfectOption from './perfectOption';
import bedroom from './bedroom';
import filter from './filter';
import instantBookCheckbox from './instantBookCheckbox';

export default combineReducers({
  guestCounter,
  dateInput,
  checkboxGroup,
  rangeInput,
  perfectOption,
  bedroom,
  filter,
  instantBookCheckbox,
  routing: routerReducer,
});
