import * as actionTypes from '../constants/actionTypes';

export function setCount(count) {
  return {
    type: actionTypes.SET_COUNT,
    count,
  };
}
