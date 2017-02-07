import * as actionTypes from '../constants/actionTypes';
import { setFilterObject } from '../actions/filter';

export function setBedroom(bedroom) {
  return {
    type: actionTypes.SET_BEDROOM,
    bedroom,
  };
}

export const incrementBedroom = () => (dispatch) => {
  dispatch(increment());
  // Now, save it to the filter object
  const optionSelected = 'bedroom';
  dispatch(setFilterObject(optionSelected));
};

export const decrementBedroom = () => (dispatch) => {
  dispatch(decrement());
  // Now, save it to the filter object
  const optionSelected = 'bedroom';
  dispatch(setFilterObject(optionSelected));
};

function increment() {
  return {
    type: actionTypes.INCREMENT_BEDROOM,
  };
}

function decrement() {
  return {
    type: actionTypes.DECREMENT_BEDROOM,
  };
}
