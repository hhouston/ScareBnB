import { connect } from 'react-redux';
import Place from './place_show';

import { fetchPlace, createReview } from '../../actions/place_actions';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state) => {
  return ({
    place: state.place
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  createBooking: (booking) => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
