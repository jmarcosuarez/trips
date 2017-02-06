import * as actionTypes from '../constants/actionTypes';

export function setFilters(filters, group) {
  return {
    type: actionTypes.SET_FILTERS,
    filters,
    group,
  };
}

export function getCheckboxesSelected() {
  return {
    type: actionTypes.GET_SELECTED_CHECKBOXES,
  };
}
