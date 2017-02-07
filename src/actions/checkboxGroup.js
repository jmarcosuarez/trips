import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

export function toggle(checkboxName, checkboxGroupName) {
  return {
    type: actionTypes.SET_CHECKBOX,
    checkboxName,
    checkboxGroupName,
  };
}

export const setCheckbox = (checkboxName, checkboxGroupName) => (dispatch) => {
  dispatch(toggle(checkboxName, checkboxGroupName));
  dispatch(setFilterObject(checkboxName));
};
