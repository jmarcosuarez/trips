import * as actionTypes from '../constants/actionTypes';

export function onFilterCancel() {
  return {
    type: actionTypes.ON_FILTER_CANCEL,
  };
}

export function onFilterSend() {
  return {
    type: actionTypes.ON_FILTER_SEND,
  };
}

export const setFilterObject = (optionSelected) => (dispatch, getState) => {
  console.log(optionSelected, 'setFilterObject');
  // Now, save it to the filter object
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
