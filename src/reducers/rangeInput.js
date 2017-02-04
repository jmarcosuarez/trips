import * as actionTypes from '../constants/actionTypes';

const initialState = {
  range: { min: 0, max: 500 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_RANGE:
      return setRange(state, action);
  }
  return state;
}

function setRange(state, action) {
  const { range } = action;
  return [...state, ...range];
}
