import * as actionTypes from '../constants/actionTypes';

const initialState = {
  count: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_COUNT:
      return setCount(state, action);
  }
  return state;
}

function setCount(state, action) {
  const { count } = action;
  console.log(count);
  return { ...state, count };
}
