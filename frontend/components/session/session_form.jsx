import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class SessionForm extends React.Component {
    constructor(props) {
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

    componentDidMount() {}

    componentDidUpdate() {
        // this.redirectIfLoggedIn();
    }

    demoLogin() {
        this.props.login({
            user: {
                email: "guest@email.com",
                password: "password"
            }
        });
    }

    closeLoginModal() {
        this.setState({showLoginModal: false});
    }

    openLoginModal() {
        this.props.receiveErrors(null);

        if (this.state.showSignUpModal === true) {
            this.setState({showSignUpModal: false});
        }

        this.setState({showLoginModal: true});
    }

    closeSignUpModal() {
        this.setState({showSignUpModal: false});
    }

    openSignUpModal() {
        this.props.receiveErrors(null);

        if (this.state.showLoginModal === true) {
            this.setState({showLoginModal: false});
        }

        this.setState({showSignUpModal: true});
    }

    redirectIfLoggedIn() {
        if (this.props.loggedIn) {
            this.props.router.push("/");
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
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
        return (
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
        const loginButton = <Button className="btn-warning test" bsSize="sm" onClick={this.openLoginModal}>
            Login
        </Button>;
        const loginLink = <a href="#" onClick={this.openLoginModal}>Login</a>;
        const signUpButton = <Button bsStyle="primary" bsSize="sm" onClick={this.openSignUpModal}>
            Sign Up
        </Button>;
        const signUpLink = <a href="#" onClick={this.openSignUpModal}>Sign Up</a>;

        const demoButton = <Button bsStyle="primary" bsSize="sm" onClick={this.demoLogin}>
            Demo
        </Button>;
        const demoLink = <a href="#" onClick={this.demoLogin}>Demo</a>;

        const hostLink = <a href="/#/new">Host</a>;

        let modal;
        if (this.state.showLoginModal === true) {
            modal = <Modal className="modal" show={this.state.showLoginModal} onHide={this.closeLoginModal}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-title">
                        <h2>Login</h2>
                    </div>

                    {this.renderErrors()}
                    <div className="login-form row">
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <label>
                                Email:
                                <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input"/>
                            </label>
                        </span>
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <label>
                                Password:
                                <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input"/>
                            </label>
                        </span>
                        <br/>
                      </div>

                        <input type="submit" value="Submit"/>
                </form>
                <p>Don't have an account? {signUpButton}</p>
            </Modal>;
        } else {
            modal = <Modal className="modal" show={this.state.showSignUpModal} onHide={this.closeSignUpModal}>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2>Sign Up</h2>
                    {this.renderErrors()}

                    <div className="row">
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6 fname">
                            First Name:

                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </span>
                        <span className="col-xs-12 col-sm-12 col-md-6 col-lg-6 fname">
                            First Name:

                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>

                        </span>
                    </div>

                    <div className="form-group">
                        <label for="exampleSelect1">Example select</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect2">Example multiple select</label>
                        <select multiple className="form-control" id="exampleSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleTextarea">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                        <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.</small>
                    </div>
                    <fieldset className="form-group">
                        <legend>Radio buttons</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                Option one is this and that&mdash;be sure to include why it's great
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                                Option two can be something else and selecting it will deselect option one
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                                Option three is disabled
                            </label>
                        </div>
                    </fieldset>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
                                <p>ScareBnB</p>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <form className="navbar-form navbar-left">

                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li>{hostLink}</li>
                                <li>{demoLink}</li>
                                <li>{loginLink}</li>
                                <li>{signUpLink}</li>
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
