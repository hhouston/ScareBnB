import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <h1>Scare BnB</h1>
    { children }
  </div>
);

export default App;
