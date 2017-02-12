import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import * as filterDefaults from '../constants/filterDefaults';

const initialState = fromJS(
  {
    options: [
      { value: 'Perfect for...' },
      { value: 'Holiday with Friends' },
      { value: 'Business trip' },
      { value: 'Romantic gateaway' },
      { value: 'A solo holiday' },
      { value: 'Long stays' },
      { value: 'Family holiday (everyone aged 15+)' },
    ],
    optionSelected: 0,
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PERFECT_OPTION:
      return setPerfectOption(state, action);
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
  }
  return state;
}

function setPerfectOption(state, action) {
  const { option } = action;
  return state.set('optionSelected', option);
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  if (fields[0] === 'perfectOption') {
    return state.set('optionSelected', filterDefaults.PERFECT_OPTION_DEFAULT);
  }
  return state;
}
