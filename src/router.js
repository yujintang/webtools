import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage'
import WebTools from './routes/WebTools'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/webtools" exact component={WebTools} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
