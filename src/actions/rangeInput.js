import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import * as filterDefaults from '../constants/filterDefaults';
import { setFilterActive } from '../actions/filter';

/*
 * Called when user adjusts max-min values
 * @range=array with min,max values
 */
export function setPriceRange(range) {
  return {
    type: actionTypes.SET_RANGE,
    range,
  };
}

/**
 * Called from the selection of an price range using the rangeInput component and user clicks Send btn
 * @range=array[min: , max:], e.g. range[0]=PriceBottom & range[1]=PriceTop
 * Just take their index ids and send to filter to activate
 */
export const savePriceRange = (range) => (dispatch, getState) => {
  if (range.max !== filterDefaults.RANGE_INPUT_MAX) {
    const flags = List(['rangeInput_max_id']);
    dispatch(setFilterActive(flags));
  }

  if (range.min !== filterDefaults.RANGE_INPUT_MIN) {
    const flags = List(['rangeInput_min_id']);
    dispatch(setFilterActive(flags));
  }
};
