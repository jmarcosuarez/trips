import { toJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

/**
 * Called when user clicks CANCEL BUTTON on the extended component
 */
export function onFilterCancel() {
  return {
    type: actionTypes.ON_FILTER_CANCEL,
  };
}

/**
 * Called when user clicks SEND BUTTON on the extended component
 */
// export function onFilterSend() {
//   return {
//     type: actionTypes.ON_FILTER_SEND,
//   };
// }

/**
 * Called when any item is toggle/selected on the filter extension component
 */
export function setFilterObject(key, value) {
  return {
    type: actionTypes.ON_FILTER_SAVE,
    key,
    value,
  };
}

/**
 * Helper: Adding params to url
 */
function queryParams(data) {
  return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
}

/**
 * Called when user clicks SEND BUTTON on the extended component
 * Prepare the params string to be send to server
 */
export const onFilterSend = () => (dispatch, getState) => {

  // Prepare object extracting keys and values into plain object
  const filterObject = getState().filter.get('filters').toJS();
  const vals = Object.keys(filterObject).map(key => filterObject[key]);
 // dispatch(addFilter(key, value));
};

/**
 * Click on Apply on filters extension gets here
 * Construct params string and send to the server
 */
// export function loadContacts(limit = types.LIMIT, offset = 0) {
//   const baseUrl = '//localhost:8000';
//   let url = `${baseUrl}/users/`;
//   const params = { limit, offset };
//   url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);

//   // return {
//   //   types: [types.CONTACTS_REQUEST, types.CONTACTS_SUCCESS, types.CONTACTS_FAILURE],
//   //   promise: fetch(url),
//   // };
// }
