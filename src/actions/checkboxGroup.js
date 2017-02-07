import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

export function toggle(checkboxName, checkboxGroupName) {
  return {
    type: actionTypes.SET_CHECKBOX,
    checkboxName,
    checkboxGroupName,
  };
}

/**
  * Helper fucntion:
  * For saving filtering data we need the key of this specific item on the filters store
  * also we need the new value to be saved (checking its store for the current value
  (I presume saving was faster than this))
  */
const prepareAndSendToFilter = (checkboxName, checkboxGroupName) => (dispatch, getState) => {
  const capitalized = checkboxGroupName.charAt(0).toUpperCase() + checkboxGroupName.slice(1);
  const key = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === capitalized;
  });

  // Here to retreive the current value of the checkbox selected we need the index where its at
  const checkboxGroupKey = getState().checkboxGroup.get(checkboxGroupName).findIndex(listing => {
    return listing.get('storeId') === checkboxName;
  });
  // Then just retreive value the immutable way!
  const value = getState().checkboxGroup.getIn([checkboxGroupName, checkboxGroupKey, 'initial']);
  dispatch(setFilterObject(key, value));
};


export const setCheckbox = (checkboxName, checkboxGroupName) => (dispatch) => {
  dispatch(toggle(checkboxName, checkboxGroupName));
  dispatch(prepareAndSendToFilter(checkboxName, checkboxGroupName));
};
