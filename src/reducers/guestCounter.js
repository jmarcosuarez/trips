import * as actionTypes from '../constants/actionTypes';
import * as filterDefaults from '../constants/filterDefaults';

export default function (state = 1, action) {
  switch (action.type) {
    case actionTypes.SET_GUEST_COUNTER:
      return action.count;
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
    case actionTypes.INCREMENT_GUEST_COUNTER:
      return state + 1;
    case actionTypes.DECREMENT_GUEST_COUNTER:
      return state - 1;
  }
  return state;
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  if (fields[0] === 'guestCounter') {
    return filterDefaults.GUEST_DEFAULT;
  }
  return state;
}
