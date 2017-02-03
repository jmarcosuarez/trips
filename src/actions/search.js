import * as actionTypes from '../constants/actionTypes';

export function setData(data) {
  return {
    type: actionTypes.DATA_SET,
    data,
  };
}

export function setOption(option) {
  return {
    type: actionTypes.SET_OPTION,
    option,
  };
}
