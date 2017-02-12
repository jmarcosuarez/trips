import moment from 'moment';
import { List } from 'immutable';

import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

function saveDates(dates) {
  return {
    type: actionTypes.SET_DATES,
    dates,
  };
}


/**
 * Called after user sets each of the dates (always 2) (dateInput component, Search Menu)
 * @Dates[Array] of 2 dates
 */
export const setDates = (dates) => (dispatch, getState) => {
  // Saves selected values from flatpickr
  dispatch(saveDates(dates));
  const flags = List(['dateInput_start_id', 'dateInput_end_id']);
  // Here we send the execution to the filter store to set this filter as active
  dispatch(setFilterActive(flags));
};
