import * as actionTypes from '../constants/actionTypes';

export function setFilters(filters, group) {
  return {
    type: actionTypes.SET_FILTERS,
    filters,
    group,
  };
}
