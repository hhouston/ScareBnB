import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.currentUser ? true : false,
    errors: state.session.errors
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
