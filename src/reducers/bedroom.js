import * as actionTypes from '../constants/actionTypes';

export default function (state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_BEDROOM:
      return action.bedroom;
    case actionTypes.INCREMENT_BEDROOM:
      return state + 1;
    case actionTypes.DECREMENT_BEDROOM:
      return state - 1;
  }
  return state;
}

