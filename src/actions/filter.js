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
 * Called from setFilterActive()
 * Saves the active state to the filter store
 */
function setActive(flag) {
  return {
    type: actionTypes.SET_ACTIVE_FILTER,
    flag,
  };
}

/**
 * Called from deleteFilterItem()
 * Sets a new active list without the deleted filter
 */
function deleteFilter(newFilterActiveList) {
  return {
    type: actionTypes.CLEAR_ACTIVE_FILTER,
    newFilterActiveList,
  };
}

/**
 * Called from setFilterActive()
 * Saves the active state to the filter store
 */
// function clearFilterValue(key) {
//   return {
//     type: actionTypes.CLEAR_FILTER_VALUE,
//     key,
//   };
// }

/**
 * Called from deleteFilterItem() below
 * All stores are listening to this action,
 * When clicking filter to delete it, this resets values in the actual filter deleted
 */
function clearCurrentFilterValues(item, fields) {
  return {
    type: actionTypes.RESET_FILTER_VALUES,
    item,
    fields,
  };
}

/** ON_FILTER_LIST_ITEM_CLICK,
 * Called when user clicks to delete a item on the filter list component
 * For the item sended here we need to:
 * 1. Clear values from component state
 * 2. Remove entry in isFilterActive
 * 3. Reset the component, as in the case of Flatpickr and the number range selector
 */
export const deleteFilterItem = (item) => (dispatch, getState) => {
 // 1. Clear values from component state
  const itemId = item.get('id');
  const fields = itemId.split('_');
  dispatch(clearCurrentFilterValues(item, fields));
  // 2. Remove entry in isFilterActive
  const isActive = getState().filter.get('isFilterActive');
  const newFilterActiveList = isActive.delete(itemId);
  dispatch(deleteFilter(newFilterActiveList));
};

/**
 * Called from all components that affect the filtering
 * Add flags if don't exist on isFilterActive store
 */
export const setFilterActive = (flags) => (dispatch, getState) => {
  //  Sets the active state of the filter whos key is passed in
  const isActive = getState().filter.get('isFilterActive');
  flags.forEach(flag => {
    if (!isActive.keySeq().contains(flag)) {
      dispatch(setActive(flag));
    }
  });
};

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
