import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

function toggle(option) {
  return {
    type: actionTypes.SET_INSTANT_BOOK,
    option,
  };
}

export const instantBookToggle = (option) => (dispatch) => {
  dispatch(toggle(option));
  const optionSelected = 'IsInstantBook';
  dispatch(setFilterObject(optionSelected));
};
