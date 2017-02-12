import moment from 'moment';
import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    dateInput_start_id: undefined,
    dateInput_end_id: undefined,
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
    dateInput_start_id: dates[0],
    dateInput_end_id: dates[1],
  });
}

