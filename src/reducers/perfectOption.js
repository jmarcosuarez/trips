import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

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
  }
  return state;
}

function setPerfectOption(state, action) {
  const { option } = action;
  return state.set('optionSelected', option);
}
