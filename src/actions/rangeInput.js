import * as actionTypes from '../constants/actionTypes';

export function setRange(range) {
  return {
    type: actionTypes.SET_RANGE,
    range,
  };
}
