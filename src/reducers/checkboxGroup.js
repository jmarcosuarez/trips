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
    case actionTypes.GET_SELECTED_CHECKBOXES:
      return getCheckboxesSelected(state, action);
  }
  return state;
}

function setFilters(state, action) {
  const { filters } = action;
  // console.log(filters);
  // const culo = state.filter(value => value === filters);
  // console.log(culo, 'del mio culo');
  // book = book.update('genres', genres => genres.push('Wizards'));
  return state;
}

function getCheckboxesSelected(state, action) {
  const { filters } = action;
  // console.log(action);
  return state;
}

//  Selectors
export function getSelected(state) {
  // console.log(state.checkboxGroup);
  const selected = state.checkboxGroup.filter((value) => value.initial === true);
  // console.log(selected);
  return selected;
}
