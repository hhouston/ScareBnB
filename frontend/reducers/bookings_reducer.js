import { RECEIVE_BOOKING,
         RECEIVE_BOOKINGS,
         REMOVE_BOOKING } from '../actions/booking_actions';

import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state,{[action.booking.id]:action.booking});
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.booking.id];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
