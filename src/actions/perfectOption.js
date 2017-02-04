import * as actionTypes from '../constants/actionTypes';

export function setSelectedOption(option) {
  return {
    type: actionTypes.SET_PERFECT_OPTION,
    option,
  };
}
