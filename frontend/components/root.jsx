import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import PlacesIndexContainer from './places/places_container';
import PlaceShowContainer from './places/place_show_container';
import Home from './home/home';
import SearchContainer from './search/search_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/places/:placeId" component={ PlaceShowContainer } />
        <Route path="/search" component={ SearchContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
