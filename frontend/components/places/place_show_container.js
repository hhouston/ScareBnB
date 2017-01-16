import { connect } from 'react-redux';
import Place from './place_show';

import { fetchPlace } from '../../actions/place_actions';

const mapStateToProps = (state) => {
  return ({
    place: state.place
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
