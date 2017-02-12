import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

export function setBedroom(bedroom) {
  return {
    type: actionTypes.SET_BEDROOM,
    bedroom,
  };
}

function increment() {
  return {
    type: actionTypes.INCREMENT_BEDROOM,
  };
}

function decrement() {
  return {
    type: actionTypes.DECREMENT_BEDROOM,
  };
}

/**
  * Helper function:
  * Just send flags to filter actioc creator, there filter will be set active
  */
const prepareAndSendToFilter = () => (dispatch, getState) => {
  const flags = List(['bedroom_bedrooms_id']);
  // Here we send the execution to the filter store to set this filter as active
  dispatch(setFilterActive(flags));
};

export const incrementBedroom = () => (dispatch) => {
  dispatch(increment());
  dispatch(prepareAndSendToFilter());
};

export const decrementBedroom = () => (dispatch) => {
  dispatch(decrement());
  dispatch(prepareAndSendToFilter());
};
