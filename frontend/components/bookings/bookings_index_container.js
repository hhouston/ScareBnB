import { connect } from 'react-redux';
import BookingsIndex from './bookings_index';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    bookings: asArray(state.bookings)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: (id) => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsIndex);
