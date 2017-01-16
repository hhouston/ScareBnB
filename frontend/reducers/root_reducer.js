import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import placesReducer from './places_reducer';
import placeReducer from './place_reducer';
import filtersReducer from './filters_reducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  place: placeReducer,
  places: placesReducer,
  session: SessionReducer
});

export default rootReducer;
