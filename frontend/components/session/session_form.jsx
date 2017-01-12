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
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidUpdate() {
    // this.redirectIfLoggedIn();
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }

  openLoginModal() {
    if (this.state.showSignUpModal === true) {
      this.setState({ showSignUpModal: false });
    }

    this.setState({ showLoginModal: true });
  }

  closeSignUpModal() {
    this.setState({ showSignUpModal: false });
  }

  openSignUpModal() {
    if (this.state.showLoginModal === true) {
      this.setState({ showLoginModal: false });
    }

    this.setState({ showSignUpModal: true });
  }

  toggleModal() {
    if (this.state.showLoginModal === true) {
      this.setState({ showLoginModal: false });
      this.setState({ showSignUp: true });
    } else {
      this.setState({ showSignUp: false });    }
      this.setState({ showLoginModal: true });
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
    const user = this.state;
    if (this.state.showLoginModal === true) {
      this.props.login({user}).then(this.closeLoginModal());
    } else {
      this.props.signup({user}).then(this.closeSignUpModal());
    }
  }

  renderErrors() {
    if (this.props.errors) {
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
                          bsStyle="primary"
                          bsSize="large"
                          onClick={this.openLoginModal}
                          >
                          Login
                        </Button>;

    const signUpButton = <Button
                          bsStyle="primary"
                          bsSize="large"
                          onClick={this.openSignUpModal}
                          >
                          Sign Up
                        </Button>;

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
      modal = <Modal className="modal container-fluid" show={this.state.showSignUpModal} onHide={this.closeSignUpModal}>
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
        {loginButton}
        {signUpButton}
        {modal}
      </div>

    );
  }
}

export default SessionForm;
