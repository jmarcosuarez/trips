import * as actionTypes from '../constants/actionTypes';

export function setSelectedOption(option) {
  return {
    type: actionTypes.SET_PERFECT_OPTION,
    option,
  };
}

export function onInstantBookToggle(option) {
  console.log('onInstantBookToggle');
  return {
    type: actionTypes.TOGGLE_INSTANT_BOOK,
    option,
  };
}

