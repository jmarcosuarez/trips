import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    dates: [],
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_DATES:
      return setDates(state, action);
  }
  return state;
}

function setDates(state, action) {
  const { dates } = action;
  // console.log(state);
  // console.log(action);
  // return [...state, ...dates];
  // return {
  //   ...state,
  //   dates: [...dates],
  // };
  // console.log(dates[0], 'from reducers');
  return state.set('dates', dates);
}
