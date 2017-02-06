import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    instantBook: {
      storeId: 'Instant Book',
      initial: false,
    },
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INSTANT_BOOK:
      return setInstantBook(state, action);
  }
  return state;
}

function setInstantBook(state, action) {
  const { option } = action;
  const currentValue = state.getIn(['instantBook', 'initial']);
  return state.setIn(['instantBook', 'initial'], !currentValue);
}
