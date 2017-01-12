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
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">ScareBnB</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">{navbar}</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Greeting;
