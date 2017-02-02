import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './search';

export default combineReducers({
  data,
  routing: routerReducer,
});
