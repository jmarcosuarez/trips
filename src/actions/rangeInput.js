import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

export function setPriceRange(range) {
  return {
    type: actionTypes.SET_RANGE,
    range,
  };
}

/**
 * Called from the selection of an price range using the rangeInput component
 * @range=array[min: , max:], e.g. range[0]=PriceBottom & range[1]=PriceTop
 * Where PriceBottom and PriceTop are key names in filter object
 */
export const savePriceRange = (range) => (dispatch, getState) => {
  if (range.max !== 500) {  // For this side, pick actual value and key to save it on filter store
    const key = getState().filter.get('filters').findIndex(listing => {
      return listing.get('id') === 'PriceTop';
    });
    const value = getState().rangeInput.get('range').max;
    dispatch(setFilterObject(key, value));
  }

  if (range.min !== 0) {  // For this side, pick actual value and key to save it on filter store
    const key = getState().filter.get('filters').findIndex(listing => {
      return listing.get('id') === 'PriceBottom';
    });
    const value = getState().rangeInput.get('range').min;
    dispatch(setFilterObject(key, value));
  }
};
