import * as actionTypes from '../constants/actionTypes';

export function onInstantBookToggle(option) {
  return {
    type: actionTypes.SET_INSTANT_BOOK,
    option,
  };
}
