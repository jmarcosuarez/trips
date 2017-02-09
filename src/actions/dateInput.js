import moment from 'moment';
import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

function saveDates(dates) {
  return {
    type: actionTypes.SET_DATES,
    dates,
  };
}

/**
  * Helper function:
  * For saving filtering data we need the key of the items on the filters store
  * If the last date doesn't exist then save the first date, this is call everytime the user selects a date
  */
const prepareAndSendToFilter = (dates) => (dispatch, getState) => {
  const CheckInKey = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'CheckIn';
  });
  const CheckOutKey = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'CheckOut';
  });

  let value = dates[1] !== undefined
      ? value = moment(dates[1]).format('MM/DD/YYYY')
      : value = moment(dates[0]).format('MM/DD/YYYY');

  let key = dates[1] !== undefined
      ? key = CheckOutKey
      : key = CheckInKey;

  // forwards to filters action creator
  dispatch(setFilterObject(key, value));
};

/**
 * Called after user sets each of the dates (always 2) (dateInput component, Search Menu)
 * @Dates[Array] of 2 dates
 */
export const setDates = (dates) => (dispatch) => {
  dispatch(saveDates(dates));
  dispatch(prepareAndSendToFilter(dates));
};
