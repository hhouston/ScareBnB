import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const createBooking = (newBooking) => dispatch => (
  BookingAPIUtil.createBooking(newBooking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});
