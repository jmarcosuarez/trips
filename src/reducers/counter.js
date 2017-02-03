import * as actionTypes from '../constants/actionTypes';

export default function (state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_COUNTER:
      return action.count;
    case actionTypes.INCREMENT_COUNTER:
      return state + 1;
    case actionTypes.DECREMENT_COUNTER:
      return state - 1;
  }
  return state;
}

