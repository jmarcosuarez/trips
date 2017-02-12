import { Map } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import * as filterDefaults from '../constants/filterDefaults';

const initialState = Map(
  {
    rangeInput_min_id: filterDefaults.RANGE_INPUT_MIN,
    rangeInput_max_id: filterDefaults.RANGE_INPUT_MAX,
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_RANGE:
      return setRange(state, action);
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
  }
  return state;
}

function setRange(state, action) {
  const { range } = action;
  return state.merge({
    rangeInput_min_id: range.min,
    rangeInput_max_id: range.max,
  });
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  if (fields[0] === 'rangeInput') {
    return state.merge({
      rangeInput_min_id: filterDefaults.RANGE_INPUT_MIN,
      rangeInput_max_id: filterDefaults.RANGE_INPUT_MAX,
    });
  }
  return state;
}

/*  Selectors  */

/**
 * The range component needed an object exactly like this
 */
export function getRangeInputArray(state) {
  const rangeInputObject = {
    min: state.rangeInput.get('rangeInput_min_id'),
    max: state.rangeInput.get('rangeInput_max_id'),
  };
  return rangeInputObject;
}
