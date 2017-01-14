import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import PlacesIndexContainer from './places/places_container';
import PlaceShowContainer from './places/place_show_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ PlacesIndexContainer } />
        <Route path="/places/:placeId" component={ PlaceShowContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
