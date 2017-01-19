import { connect } from 'react-redux';
import Place from './place_show';

import { fetchPlace } from '../../actions/place_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchReviews } from '../../actions/review_actions';


const mapStateToProps = (state) => {
  return ({
    place: state.place,
    reviews: state.reviews,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  createBooking: (booking) => dispatch(createBooking(booking)),
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
