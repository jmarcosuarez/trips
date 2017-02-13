import { List } from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import { setFilterActive } from '../actions/filter';

function toggle(option) {
  return {
    type: actionTypes.SET_INSTANT_BOOK,
    option,
  };
}

/**
  * Helper function:
  * For saving filtering data we need the key of this specific item on the filters store
  * also we need the new value to be saved
  */
const prepareAndSendToFilter = () => (dispatch, getState) => {
  const flags = List(['instantBookCheckBox_id']);
  dispatch(setFilterActive(flags));
};
/**
 * Called after saving selection on extended filter component
 */
export const instantBookToggle = (option) => (dispatch) => {
  dispatch(toggle(option));
  dispatch(prepareAndSendToFilter());
};
