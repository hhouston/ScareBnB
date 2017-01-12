import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
// <Link to="/login" activeClassName="current">Login</Link>
// &nbsp;
// <Link to="/signup" activeClassName="current">Sign up!</Link>


const loggedOut = () => (
  <div className="login-signup">
    <SessionFormContainer />
  </div>
);

const loggedIn = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  const navbar = currentUser ? loggedIn(currentUser, logout) : loggedOut();
  return (
    <div>
      {navbar}
    </div>
  );
};

export default Greeting;
