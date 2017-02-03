import * as actionTypes from '../constants/actionTypes';

export function setCounter(count) {
  return {
    type: actionTypes.SET_COUNTER,
    count,
  };
}

export function increment() {
  return {
    type: actionTypes.INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT_COUNTER,
  };
}
