import * as actionTypes from '../constants/actionTypes';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_FILTER_SEND:
      return onFilterSend(state);
    case actionTypes.ON_FILTER_CANCEL:
      return onFilterCancel(state);
  }
  return state;
}

function onFilterSend(state) {
  // console.log('onFilterSend');
  return state;
}

function onFilterCancel(state) {
  // console.log('onFilterCancel');
  return state;
}
