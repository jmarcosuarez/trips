import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

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
  * Saving to filter by setting a flag. Filter action creator saves active state
  */
const prepareAndSendToFilter = (checkboxGroupName) => (dispatch) => {
  let flags;
  switch (checkboxGroupName) {
    case 'neighbourhoods':
      flags = List(['checkboxGroup_neighbourhoods_id']);
      break;
    case 'amenities':
      flags = List(['checkboxGroup_amenities_id']);
      break;
    case 'propertyType':
      flags = List(['checkboxGroup_propertyType_id']);
      break;
    default:
      break;
  }
  dispatch(setFilterActive(flags));
};


export const setCheckbox = (checkboxName, checkboxGroupName) => (dispatch) => {
  dispatch(toggle(checkboxName, checkboxGroupName));
  dispatch(prepareAndSendToFilter(checkboxGroupName));
};
