import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
      </Route>
    </Router>
  </Provider>
);

export default Root;
