import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import placesReducer from './places_reducer';
import placeReducer from './place_reducer';
import filtersReducer from './filters_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  reviews: reviewsReducer,
  place: placeReducer,
  places: placesReducer,
  bookings: bookingsReducer,
  session: SessionReducer
});

export default rootReducer;
