import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

export function setCounter(count) {
  return {
    type: actionTypes.SET_GUEST_COUNTER,
    count,
  };
}

function increment() {
  return {
    type: actionTypes.INCREMENT_GUEST_COUNTER,
  };
}

function decrement() {
  return {
    type: actionTypes.DECREMENT_GUEST_COUNTER,
  };
}

/**
  * Helper function:
  * Both, when in/decrement: To Save filter data we need the key
  * of the specific item on filters store. Then,
  * need the current value to be saved (number)
  */
const prepareAndSendToFilter = () => (dispatch, getState) => {
  const value = getState().guestCounter;
  const flags = List(['guestCounter_guest_id']);
  // When decrementing just do it until the value of 1
  if (value >= 1 && value <= 11) {
    dispatch(setFilterActive(flags));
  }
};

/**
 * Called when user increments the count of Guests from the Search Menu GuestCounter Componet
 */
export const incrementGuest = () => (dispatch, getState) => {
  const value = getState().guestCounter;
  // Just increment until 11
  if (value < 11) {
    dispatch(increment());
    dispatch(prepareAndSendToFilter());
  }
};

/**
 * Called when user decrements the count of Guests from the Search Menu GuestCounter Componet
 */
export const decrementGuest = () => (dispatch, getState) => {
  const value = getState().guestCounter;
  // Just decrement until the value of 1
  if (value > 1) {
    dispatch(decrement());
    dispatch(prepareAndSendToFilter());
  }
};
