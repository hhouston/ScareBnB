import { connect } from 'react-redux';
import { createPlace } from '../../actions/place_actions';
import PlaceForm from './place_form';
import PlaceFormStep from './place_form_step';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createPlace: place => dispatch(createPlace(place))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceFormStep);
