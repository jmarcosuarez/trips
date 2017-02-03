import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './search';
import count from './count';

export default combineReducers({
  data,
  count,
  routing: routerReducer,
});
