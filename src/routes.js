import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Stream from './components/Stream';
import Search from './components/Search';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Stream} />
    <Route path="/search" component={Search} />
  </Route>
);
