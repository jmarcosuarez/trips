import * as actionTypes from '../constants/actionTypes';
import * as checkboxGroupSelectors from '../reducers/checkboxGroup';
// import { getCheckboxesSelected } from './checkboxGroup';
// import { getOptionsSelected } from '../../actions/toggle';
// import { getRoomsSelected } from '../../actions/toggle';
// import { isInstantBookSelected } from '../../actions/toggle';

// export function onFilterSend() {
//   return {
//     type: actionTypes.ON_FILTER_SEND,
//   };
// }

export function onFilterCancel() {
  return {
    type: actionTypes.ON_FILTER_CANCEL,
  };
}

export const onFilterSend = () => (dispatch, getState) => {
  const playlist = getState().checkboxGroup;
  const selected = checkboxGroupSelectors.getSelected(getState());
  // console.log(selected);
  // const checkboxesSelected = dispatch(getCheckboxesSelected());
  // const optionsSelected = dispatch(getOptionsSelected());
  // const roomsSelected = dispatch(getRoomsSelected());
  // const instantBookSelected = dispatch(isInstantBookSelected());
  //  Then, construct the params string and send to server
};

// function getCheckboxesSelected() {
//   return {
//     type: actionTypes.RESET_PLAYLIST,
//   };
// }

function getOptionsSelected() {
  return {
    type: actionTypes.RESET_ACTIVE_TRACK,
  };
}

function getRoomsSelected() {
  return {
    type: actionTypes.RESET_ACTIVE_TRACK,
  };
}

function isInstantBookSelected() {
  return {
    type: actionTypes.RESET_ACTIVE_TRACK,
  };
}

