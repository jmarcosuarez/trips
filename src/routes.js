import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';
import Extension from './components/Search/Extension';
import List from './components/Search/List';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/search" component={Search}>
      <Route path="/list" component={List} />
      <Route path="/extension" component={Extension} />
    </Route>
  </Route>
);
