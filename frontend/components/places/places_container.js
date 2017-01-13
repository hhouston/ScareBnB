import { connect } from 'react-redux';
import Places from './places';

import { fetchPlaces } from '../../actions/place_actions';

const mapStateToProps = (state) => ({
  places: state
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: () => dispatch(fetchPlaces())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
