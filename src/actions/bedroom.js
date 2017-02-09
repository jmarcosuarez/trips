import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

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
  * Helper fucntion:
  * For saving filtering data we need the key of this specific item on the filters store
  * also we need the new value to be saved
  */
const prepareAndSendToFilter = () => (dispatch, getState) => {
  const key = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'Bedrooms';
  });
  const value = getState().bedroom;
  dispatch(setFilterObject(key, value));
};

export const incrementBedroom = () => (dispatch) => {
  dispatch(increment());
  dispatch(prepareAndSendToFilter());
};

export const decrementBedroom = () => (dispatch) => {
  dispatch(decrement());
  dispatch(prepareAndSendToFilter());
};
