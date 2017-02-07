import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

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
  dispatch(selectOption(option));
  // To save this filter we need its position in the filter object to save the new value
  const key = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'Occasion';
  });
  const value = option;
  // Dispatch it to the filter action
  dispatch(setFilterObject(key, value));
};
