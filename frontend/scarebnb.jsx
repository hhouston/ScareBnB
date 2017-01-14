import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { login } from './actions/session_actions';
// import { fetchPlaces } from './actions/place_actions';
import { fetchPlace } from './actions/place_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchPlace = fetchPlace();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
