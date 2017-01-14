import { connect } from 'react-redux';
import Place from './place_show';

import { fetchPlace, fetchReviews } from '../../actions/place_actions';

const mapStateToProps = (state) => {
  return ({
    place: state.place,
    reviews: state.reveiews
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchReviews: (id) => dispatch(fetchReviews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
