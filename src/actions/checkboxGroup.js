import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

export function toggle(checkboxName, checkboxGroupName) {
  return {
    type: actionTypes.SET_CHECKBOX,
    checkboxName,
    checkboxGroupName,
  };
}

export function toggleCbGroup() {
  return {
    type: actionTypes.TOGGLE_CB_GROUP,
  };
}

/**
  * Helper function:
  * For saving filtering data we need the key of this specific item on the filters store
  * also we need the new value to be saved (checking its store for the current value)
  */
const prepareAndSendToFilter = (checkboxName, checkboxGroupName) => (dispatch, getState) => {
  const capitalized = checkboxGroupName.charAt(0).toUpperCase() + checkboxGroupName.slice(1);
  // This key is the position where the checkbox item is sat at the filters store,
  // we need it to save to here later on
  const key = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === capitalized;
  });
  // Also we need the first value at this keys position (If any)
  const currentFilterValue = getState().filter.getIn(['filters', key, 'value', 0]);
  const currentFilter = getState().filter.getIn(['filters', key, 'value']);
  // Here to retreive the current value of the checkbox selected we need the index where its at
  // Also, this is the value to be saved on the aaray in filters
  const checkboxNameKey = getState().checkboxGroup.get(checkboxGroupName).findIndex(listing => {
    return listing.get('storeId') === checkboxName;
  });
  // Then just retreive the current value of the checkbox, if "true" we add and if it is "false" we delete
  const value = getState().checkboxGroup.getIn([checkboxGroupName, checkboxNameKey, 'initial']);

  // We are saving keys of checkboxes selected and saving it as array
  // in the filter position that corresponds based on checkboxGroupName
  if (currentFilterValue !== undefined) {
    const arr = value
      ? currentFilter.push(checkboxNameKey)
      : currentFilter.filter(item => item !== checkboxNameKey);
    dispatch(setFilterObject(key, arr));
  } else {
    const arr = List([checkboxNameKey]);
    dispatch(setFilterObject(key, arr));
  }
};


export const setCheckbox = (checkboxName, checkboxGroupName) => (dispatch) => {
  dispatch(toggle(checkboxName, checkboxGroupName));
  dispatch(prepareAndSendToFilter(checkboxName, checkboxGroupName));
};
