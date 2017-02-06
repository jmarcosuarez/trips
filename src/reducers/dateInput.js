import moment from 'moment';
import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    start: [],
    end: [],
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
  return state.merge({
    start: dates[0],
    end: dates[1],
  });
}
