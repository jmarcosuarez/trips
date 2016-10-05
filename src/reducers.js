import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './components/Stream/StreamReducer';

export default combineReducers({
  track,
  routing: routerReducer,
});
