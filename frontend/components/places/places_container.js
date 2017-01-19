import { connect } from 'react-redux';
import Places from './places';

import { fetchPlaces } from '../../actions/place_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    places: asArray(state.places)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: () => dispatch(fetchPlaces())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
