import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Stream from './components/Stream';
import Search from './components/Search';
import Extension from './components/Search/Extension';
import List from './components/Search/components/Extension/List';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Stream} />
    <Route path="/search" component={Search}>
      <Route path="/list" component={List} />
      <Route path="/extension" component={Extension} />
    </Route>
  </Route>
);
