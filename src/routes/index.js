import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Error from '~/pages/Error';

function routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Search} path="/search" exact />
      <Route component={Error} path="/error" exact />
    </Switch>
  );
}

export default routes;
