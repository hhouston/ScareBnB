import React from 'react';
import NavbarContainer from './greeting/navbar_container';
import SessionFormContainer from './session/session_form_container';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    <h1>Scare BnB</h1>
    { children }
  </div>
);

export default App;
