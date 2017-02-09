import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

function setRange(range) {
  return {
    type: actionTypes.SET_RANGE,
    range,
  };
}

/**
 * Called from the selection of an price range using the rangeInput component
 * @range=array[min: , max:], e.g. range[0]=PriceBottom & range[1]=PriceTop
 * Where PriceBottom and PriceTop are their keys in the filter object
 */
export const setPriceRange = (range) => (dispatch, getState) => {
  dispatch(setRange(range));
  // We need the two positions for the values to be saved on

  const priceTopKey = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'PriceTop';
  });

  const priceBottomKey = getState().filter.get('filters').findIndex(listing => {
    return listing.get('id') === 'PriceBottom';
  });
  // Then, we need the current values of the range of prices selected in the rangeInput store
  const priceTopValue = getState().rangeInput.get('range').max;
  const priceBottomValue = getState().rangeInput.get('range').min;

  // Dispatch it to the filter action, both params are numbers
  // When fetching occurs need to do it only when the dropdown is closed, not at every step!
  // dispatch(setFilterObject(key, value));
};
