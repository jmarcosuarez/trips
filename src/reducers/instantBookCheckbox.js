import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    storeId: 'Instant Book',
    initial: false,
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INSTANT_BOOK:
      return setInstantBook(state, action);
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
  }
  return state;
}

function setInstantBook(state, action) {
  const { option } = action;
  const currentValue = state.get('initial');
  return state.set('initial', !currentValue);
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  if (fields[0] === 'instantBookCheckBox') {
    return state.set('initial', false);
  }
  return state;
}
