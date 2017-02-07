import * as actionTypes from '../constants/actionTypes';

/**
 * Called when user clicks cancel on the extended component
 */
export function onFilterCancel() {
  return {
    type: actionTypes.ON_FILTER_CANCEL,
  };
}

/**
 * Called when user clicks SEND on the extended component
 */
export function onFilterSend() {
  return {
    type: actionTypes.ON_FILTER_SEND,
  };
}

/**
 * Called when any item is toggle/selected on the filter extension component
 */
export function addFilter(key, value) {
  return {
    type: actionTypes.ON_FILTER_SAVE,
    key,
    value,
  };
}

/**
 * Entry point for all seleccions/toggle on the filter extension component
 * @Key= Key of the entry on filter state
 * @value = Value passed for saving
 */
export const setFilterObject = (key, value) => (dispatch, getState) => {
  // 1. Prepate the filter entry
  // 2. Send it to the reducer for saving. (this will refresh the Notification Bar!)
  dispatch(addFilter(key, value));
};

/**
 * Helper: Adding params to url
 */
function queryParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
}

/**
 * Click on Apply on filters extension gets here
 * Construct params string and send to the server
 */
export function loadContacts(limit = types.LIMIT, offset = 0) {
  const baseUrl = '//localhost:8000';
  let url = `${baseUrl}/users/`;
  const params = { limit, offset };
  url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);

  // return {
  //   types: [types.CONTACTS_REQUEST, types.CONTACTS_SUCCESS, types.CONTACTS_FAILURE],
  //   promise: fetch(url),
  // };
}
