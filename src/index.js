import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
// import * as actions from './components/Stream/StreamActions';
import routes from './routes';
import DevTools from './stores/DevTools';

// const tracks = [
//   {
//     title: 'Some data',
//   },
//   {
//     title: 'Some more data',
//   },
// ];

const store = configureStore();
// store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {/* <DevTools /> */}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
