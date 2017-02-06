import * as actionTypes from '../constants/actionTypes';

export function setCheckbox(checkboxName, checkboxGroupName) {
  return {
    type: actionTypes.SET_CHECKBOX,
    checkboxName,
    checkboxGroupName,
  };
}
