import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      showLoginModal: false,
      showSignUpModal: false,
      fname: "",
      lname: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount () {
  }

  componentDidUpdate() {
    // this.redirectIfLoggedIn();
  }

  demoLogin() {
    this.props.login({
      user: {
        email: "guest@guest.com",
        password: "password"
      }
    });
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }

  openLoginModal() {
    this.props.receiveErrors(null);

    if (this.state.showSignUpModal === true) {
      this.setState({ showSignUpModal: false });
    }

    this.setState({ showLoginModal: true });
  }

  closeSignUpModal() {
    this.setState({ showSignUpModal: false });
  }

  openSignUpModal() {
    this.props.receiveErrors(null);

    if (this.state.showLoginModal === true) {
      this.setState({ showLoginModal: false });
    }

    this.setState({ showSignUpModal: true });
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveErrors(null);

    const user = this.state;
    if (this.state.showLoginModal === true) {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

  render() {
    const loginButton = <Button
                          className="btn-warning test"
                          bsSize="sm"
                          onClick={this.openLoginModal}
                          >
                          Login
                        </Button>;
    const loginLink = <a href="#">Login</a>;
    const signUpButton = <Button
                          bsStyle="primary"
                          bsSize="sm"
                          onClick={this.openSignUpModal}
                          >
                          Sign Up
                        </Button>;
    const signUpLink = <a href="#">Sign Up</a>;

    const demoButton = <Button
                          bsStyle="primary"
                          bsSize="sm"
                          onClick={this.demoLogin}
                          >
                          Demo
                        </Button>;
    const demoLink = <a href="#">Demo</a>;

    let modal;
    if (this.state.showLoginModal === true) {
      modal = <Modal className="modal" show={this.state.showLoginModal} onHide={this.closeLoginModal}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <h2>Login</h2>
                  {this.renderErrors()}
                  <div className="login-form">
                    <br/>
                    <label> Email:
                      <input type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="login-input" />
                    </label>
                    <br/>
                    <label> Password:
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
                <p>Don't have an account? {signUpButton}</p>
            </Modal>;
    } else {
      modal = <Modal className="modal" show={this.state.showSignUpModal} onHide={this.closeSignUpModal}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <h2>Sign Up</h2>
                  {this.renderErrors()}
                  <div className="signup-form">
                    <br/>
                      <div className="row signup-name">
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6 fname"> First Name:
                          <input type="text"
                            value={this.state.fname}
                            onChange={this.update("fname")}
                            className="login-input" />
                        </span>
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6 lname"> Last Name:
                          <input type="text"
                            value={this.state.lname}
                            onChange={this.update("lname")}
                            className="login-input" />
                        </span>
                      </div>
                    <label> Email:
                      <input type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="login-input" />
                    </label>
                    <br/>
                    <label> Password:
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
                <p>Already have an account? {loginButton}</p>
            </Modal>;
    }
    return (
      <div>
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
                <img className="logo" alt="ScareBnB" src="assets/haunted-house.svg" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">{demoLink}</a></li>
                <li><a href="#">{loginLink}</a></li>
                <li><a href="#">{signUpLink}</a></li>
                </ul>
            </div>
          </div>
        </nav>

        {modal}
      </div>

    );
  }
}

export default SessionForm;
