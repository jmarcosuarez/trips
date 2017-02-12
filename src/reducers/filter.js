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
      instantBookCheckBox_instantBook_id: {
        id: 'instantBookCheckBox_instantBook_id',
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
      instantBookCheckBox_instantBook_id: true,
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
    case actionTypes.CLEAR_FILTER_VALUE:
      return clearFilterValue(state, action);
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
function clearFilterValue(state, action) {
  const { key } = action;
  return state.setIn(['filters', key, 'value'], undefined);
}

/**
 * Set value at the key position
 * @key= Is the key on filters object where acting upon
 */
function clearActiveFilter(state, action) {
  const { key } = action;
  return state.setIn(['filters', key, 'active'], false);
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
 * Iterates through "isFilterActive" taking its ids and retreiving
 * data the filters store whos ids match.
 */
export function getActiveFilters(state) {
  const filters = state.filter.get('filters');
  const isFilterActive = state.filter.get('isFilterActive');
  // const result = isFilterActive.keySeq().forEach(
  //   k => {
      // const map1 = Map();
      // const map2 = filters.find(f => f.get('id') === k);
      // console.log(map2);
      // filters.filter(x => x.get('id') === k).map(x => x.get('name'));
  //   }
  // );
  //     console.log(result);
  // return result;
  // const value = state.filter.get('filters').filter(k => console.log(k));
  // console.log();

  const result = filters.filter(function(o1) {
    // filter out (!) items in result2
    return isFilterActive.some(function(o2, o3) {
      // console.log(o1.get('id'), o3);
      return o1.get('id') === o3;          // assumes unique id
    });
  });
  // console.log(result.toJS());

  return result;
  // return state.filter.get('isFilterActive');
}
