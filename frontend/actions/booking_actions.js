import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const createBooking = (newBooking) => dispatch => (
  BookingAPIUtil.createBooking(newBooking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const fetchBookings = () => dispatch => (
  BookingAPIUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
);

export const deleteBooking = (id) => dispatch => (
  BookingAPIUtil.deleteBooking(id)
    .then(booking => dispatch(removeBooking(booking)))
);

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = (booking) => ({
  type: REMOVE_BOOKING,
  booking
});
