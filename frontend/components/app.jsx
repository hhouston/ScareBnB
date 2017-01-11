import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import BButton from 'react-bootstrap/lib/Button';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <h1>Scare BnB</h1>
    <BButton>test</BButton>
    { children }
  </div>
);

export default App;
