import * as actionTypes from '../constants/actionTypes';

const initialState = {
  disabled: [{ from: '2017-02-16', to: '2017-02-19' }, '2017-02-24'], // flatpickr gets disabled dates through here
  dates: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_DATES:
      return setDates(state, action);
  }
  return state;
}

function setDates(state, action) {
  const { dates } = action;
  return [...state, ...dates];
}
