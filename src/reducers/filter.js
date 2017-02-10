import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    filters: [
      { id: 'CheckIn', value: '', active: false },
      { id: 'CheckOut', value: '', active: false },
      { id: 'Guests', value: 1, active: true }, // testing true
      { id: 'PriceBottom', value: 0, active: false },
      { id: 'PriceTop', value: 500, active: false },
      { id: 'Occasion', value: 0, active: false },
      { id: 'Bedrooms', value: 1, active: true }, // testing true
      { id: 'Page', value: 1, active: false },
      { id: 'CityId', value: 1, active: false },
      { id: 'IsInstantBook', value: false, active: false },
      { id: 'Neighbourhoods', value: [1, 2], active: true }, // testing true
      { id: 'Amenities', value: [], active: false },
      { id: 'PropertyType', value: [], active: false },
    ],
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_FILTER_SEND:
      return onFilterSend(state);
    case actionTypes.ON_FILTER_SAVE:
      return setFilterObject(state, action);
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
function setFilterObject(state, action) {
  const { key, value } = action;
  // This works for now, but it would not be better to find() the entry and set its value?
  return state.setIn(['filters', key, 'value'], value);
  // return state;
}
