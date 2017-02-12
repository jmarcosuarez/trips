import * as actionTypes from '../constants/actionTypes';
import * as filterDefaults from '../constants/filterDefaults';

export default function (state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_BEDROOM:
      return action.bedroom;
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
    case actionTypes.INCREMENT_BEDROOM:
      return state + 1;
    case actionTypes.DECREMENT_BEDROOM:
      return state - 1;
  }
  return state;
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  if (fields[0] === 'bedroom') {
    return filterDefaults.BEDROOMS_DEFAULT;
  }
  return state;
}
