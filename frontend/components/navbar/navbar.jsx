import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

const loggedOut = () => (
  <div className="login-signup">
    <SessionFormContainer />
  </div>
);



const loggedIn = (currentUser, logout) => (
  <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                  <p>ScareBnB</p>
              </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
              <form className="navbar-form navbar-left">
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search"/>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                  <li>{currentUser.email}</li>
                  <li><a href="/places/new">Host</a></li>
                  <li><a href="#" onClick={logout}>Sign Out</a></li>
              </ul>
          </div>
      </div>
  </nav>
);

const Navbar = ({ currentUser, logout }) => {
  const navbar = currentUser ? loggedIn(currentUser, logout) : loggedOut();
  return (
    <div>
      {navbar}
    </div>
  );
};

export default Navbar;
