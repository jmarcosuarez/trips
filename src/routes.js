import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Stream from './components/Stream';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Stream} />
  </Route>
);
