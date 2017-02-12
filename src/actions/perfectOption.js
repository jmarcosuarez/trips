import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

/**
 * Saves values to store
 */
function selectOption(option) {
  return {
    type: actionTypes.SET_PERFECT_OPTION,
    option,
  };
}

/**
 * Called from the selection of an "Occasion" (The "Perfect for..." dropdown)
 * @Option=Number
 */
export const setPerfectOption = (option) => (dispatch, getState) => {
  // 1. Send values to reducer for saving
  dispatch(selectOption(option));
  // 2. Send flag to filter reducer and set it active,
  // Sending the execution to the filter store to set this filter as active
  const flags = List(['perfectOption_optionSelected_id']);
  dispatch(setFilterActive(flags));
};
