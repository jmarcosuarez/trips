import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './search';
import counter from './counter';

export default combineReducers({
  data,
  counter,
  routing: routerReducer,
});
