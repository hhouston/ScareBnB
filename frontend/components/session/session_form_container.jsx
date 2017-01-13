import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, logout, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.currentUser ? true : false,
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    receiveErrors: () => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
