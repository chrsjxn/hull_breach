import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './app/store.js';

import App from './app/components/app.js';
import Game from './app/components/game.js';
import Rules from './app/components/rules.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="rules" component={Rules} />
        <Route path="game" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
