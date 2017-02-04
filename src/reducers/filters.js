import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    neighborhoods: [
      { storeId: 'Balham', initial: false },
      { storeId: 'Battersea', initial: false },
      { storeId: 'Bayswater', initial: false },
    ],
    amenities: [
      { storeId: 'Air conditioning', initial: false },
      { storeId: 'Amazon Prime', initial: false },
      { storeId: 'Apple TV', initial: false },
    ],
    propertyType: [
      { storeId: 'Apartament', initial: false },
      { storeId: 'Townhouse', initial: false },
      { storeId: 'Loft', initial: false },
    ],
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FILTERS:
      return setFilters(state, action);
  }
  return state;
}

function setFilters(state, action) {
  const { filters } = action; // can we add the group property to the action itself?
  console.log(action);
  // book = book.update('genres', genres => genres.push('Wizards'));


  // return state.merge(filters);
  return state;
  // return [...state, ...filters];
}
