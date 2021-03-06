import { fromJS, Map, toJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    filters: {
      dateInput_start_id: {
        id: 'dateInput_start_id',
        name: 'CheckIn',
      },
      dateInput_end_id: {
        id: 'dateInput_end_id',
        name: 'CheckOut',
      },
      guestCounter_guest_id: {
        id: 'guestCounter_guest_id',
        name: 'Guests',
      },
      rangeInput_min_id: {
        id: 'rangeInput_min_id',
        name: 'PriceBottom',
      },
      rangeInput_max_id: {
        id: 'rangeInput_max_id',
        name: 'PriceTop',
      },
      perfectOption_optionSelected_id: {
        id: 'perfectOption_optionSelected_id',
        name: 'Occasion',
      },
      bedroom_bedrooms_id: {
        id: 'bedroom_bedrooms_id',
        name: 'Bedrooms',
      },
      instantBookCheckBox_id: {
        id: 'instantBookCheckBox_id',
        name: 'IsInstantBook',
      },
      checkboxGroup_neighbourhoods_id: {
        id: 'checkboxGroup_neighbourhoods_id',
        name: 'Neighbourhoods',
      },
      checkboxGroup_amenities_id: {
        id: 'checkboxGroup_amenities_id',
        name: 'Amenities',
      },
      checkboxGroup_propertyType_id: {
        id: 'checkboxGroup_propertyType_id',
        name: 'PropertyType',
      },
    },
    isFilterActive: {
      guestCounter_guest_id: true,
      bedroom_bedrooms_id: true,
      instantBookCheckBox_id: true,
    },
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_FILTER_SEND:
      return onFilterSend(state);
    case actionTypes.ON_FILTER_CANCEL:
      return onFilterCancel(state);
    case actionTypes.SET_ACTIVE_FILTER:
      return setActiveFilter(state, action);
    case actionTypes.CLEAR_ACTIVE_FILTER:
      return clearActiveFilter(state, action);
    // case actionTypes.CLEAR_FILTER_VALUE:
    //   return clearFilterValue(state, action);
  }
  return state;
}

function onFilterSend(state) {
  return state;
}

function onFilterCancel(state) {
  return state;
}
/**
 * Set value at the key position
 * @key= Is the key on filters object where acting upon
 */
// function clearFilterValue(state, action) {
//   const { key } = action;
//   return state.setIn(['filters', key, 'value'], undefined);
// }

/**
 * Called from filters action creator
 * Sets a new List on isFilterActive
 * @newFilterActiveList = The new list to be set
 */
function clearActiveFilter(state, action) {
  const { newFilterActiveList } = action;
  const isFilterActive = state.get('isFilterActive');
  return state.set('isFilterActive', newFilterActiveList);
}

/**
 * Set value at the key position
 * @key= Is the key on filters object where acting upon
 */
function setActiveFilter(state, action) {
  const { flag } = action;
  const isFilterActive = state.get('isFilterActive');
  return state.setIn(['isFilterActive', flag], true);
}


/*  Selectors  */

/**
 * Iterates through filter store filtering
 * the entries that have a key present in isFilterActive
 */
export function getActiveFilters(state) {
  const filters = state.filter.get('filters');
  const isFilterActive = state.filter.get('isFilterActive');
  const result = filters.filter(o1 => {
    return isFilterActive.some((value, key) => {
      return o1.get('id') === key;
    });
  });
  return result;
}
