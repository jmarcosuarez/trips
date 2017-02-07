import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    filters: [
      { id: 'CheckIn', value: '' },
      { id: 'CheckOut', value: '' },
      { id: 'Guests', value: 1 },
      { id: 'PriceBottom', value: 0 },
      { id: 'PriceTop', value: 500 },
      { id: 'Occasion', value: 0 },
      { id: 'Bedrooms', value: 1 },
      { id: 'Page', value: 1 },
      { id: 'CityId', value: 1 },
      { id: 'IsInstantBook', value: false },
      { id: 'Neighbourhoods', value: [] },
      { id: 'Amenities', value: [] },
      { id: 'PropertyTypes', value: [] },
    ],
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_FILTER_SEND:
      return onFilterSend(state);
    case actionTypes.ON_FILTER_SAVE:
      return addFilter(state, action);
    case actionTypes.ON_FILTER_CANCEL:
      return onFilterCancel(state);
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
 * Just need to save value at the key position
 * @key= Is the key on filters object where to save to
 * @value= (number) Is the value to be saved
 */
function addFilter(state, action) {
  const { key, value } = action;
  // This works for now, but it would be better to find() the entry and set its value?
  return state.setIn(['filters', key, 'value'], value);
  // return state;
}
