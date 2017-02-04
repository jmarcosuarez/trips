import * as actionTypes from '../constants/actionTypes';

export function setBedroom(bedroom) {
  return {
    type: actionTypes.SET_BEDROOM,
    bedroom,
  };
}

export function incrementBedroom() {
  return {
    type: actionTypes.INCREMENT_BEDROOM,
  };
}

export function decrementBedroom() {
  return {
    type: actionTypes.DECREMENT_BEDROOM,
  };
}
