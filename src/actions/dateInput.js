import * as actionTypes from '../constants/actionTypes';

export function setDates(dates) {
  return {
    type: actionTypes.SET_DATES,
    dates,
  };
}
