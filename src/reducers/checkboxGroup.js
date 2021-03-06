import { fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = fromJS(
  {
    neighbourhoods: [
      { storeId: 'Balham', initial: false },
      { storeId: 'Battersea', initial: false },
      { storeId: 'Bayswater', initial: false },
    ],
    amenities: [
      { storeId: 'Air conditioning', initial: false },
      { storeId: 'Amazon Prime', initial: false },
      { storeId: 'Apple TV', initial: false },
    ],
    propertyType: [
      { storeId: 'Apartament', initial: false },
      { storeId: 'Townhouse', initial: false },
      { storeId: 'Loft', initial: false },
    ],
    cbGroupActive: false,
  }
);

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CHECKBOX:
      return setCheckbox(state, action);
    case actionTypes.GET_SELECTED_CHECKBOXES:
      return getCheckboxesSelected(state, action);
    case actionTypes.RESET_FILTER_VALUES:
      return resetValues(state, action);
    case actionTypes.TOGGLE_CB_GROUP:
      return toggleCbGroup(state);
  }
  return state;
}

function toggleCbGroup(state, action) {
  return !state.get('cbGroupActive');
}


function setCheckbox(state, action) {
  const { checkboxName, checkboxGroupName } = action;
  /* This needs to be on the action, not here! */
  const indexOfListingToUpdate = state.get(checkboxGroupName).findIndex(listing => {
    return listing.get('storeId') === checkboxName;
  });
  const value = state.getIn([checkboxGroupName, indexOfListingToUpdate, 'initial']);
  return state.setIn([checkboxGroupName, indexOfListingToUpdate, 'initial'], !value);
}

function getCheckboxesSelected(state, action) {
  const { checkboxName } = action;
  // console.log(action);
  return state;
}

// Reset filter values is triggered for all filters
// Make sure this one was triggered for this reducer in mind
function resetValues(state, action) {
  const { item, fields } = action;
  let flags;
  // console.log(state, action);
  if (fields[0] === 'checkboxGroup') {
    switch (fields[1]) {
      case 'neighbourhoods':
        return state.get('neighbourhoods').map(
          k => k.set('initial', false)
        );
        // return state.setIn(['neighbourhoods', 'all of them! use map?', 'initial'], false);
      // case 'amenities':
        // flags = List(['checkboxGroup_amenities_id']);
      // case 'propertyType':
        // flags = List(['checkboxGroup_propertyType_id']);
      default:
        break;
    }
  }
  // if (fields[0] === 'instantBookCheckBox') {
  //   return state.set('initial', false);
  // }
  return state;
}


// //  Selectors
// export function getSelected(state) {
//   // console.log(state.checkboxGroup);
//   const selected = state.checkboxGroup.filter((value) => value.initial === true);
//   // console.log(selected);
//   return selected;
// }
