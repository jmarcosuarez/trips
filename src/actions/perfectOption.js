import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

function selectOption(option) {
  return {
    type: actionTypes.SET_PERFECT_OPTION,
    option,
  };
}

export const setPerfectOption = (option) => (dispatch, getState) => {
  dispatch(selectOption(option));
  // const optionSelected = getState().perfectOption.getIn(['options', option, 'value']);
  const optionSelected = `Occasion=${option}`;
  dispatch(setFilterObject(optionSelected));
  // dispatch(resetToggle(toggleTypes.PLAYLIST));
};
