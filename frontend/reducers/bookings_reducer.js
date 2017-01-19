import { RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';


const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_BOOKING) {
    const newState = merge({}, state);
    newState.bookings = newState.bookings.concat(action.booking);
    return newState;
  } else {
    return state;
  }
};

export default BookingsReducer;
