import * as actionTypes from '../constants/actionTypes';

export default function (state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_GUEST_COUNTER:
      return action.count;
    case actionTypes.INCREMENT_GUEST_COUNTER:
      return state + 1;
    case actionTypes.DECREMENT_GUEST_COUNTER:
      return state - 1;
  }
  return state;
}

