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
      showModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
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
    this.props.processForm({user});
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
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.openModal}
        >
          Test Modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					Welcome to Scare BnB!
  					<br/>
  					Please {this.props.formType} or {this.navLink()}
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
        </Modal>
  		</div>
    );
  }
}

export default SessionForm;
