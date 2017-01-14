import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import placesReducer from './places_reducer';
import placeReducer from './place_reducer';

const rootReducer = combineReducers({
  place: placeReducer,
  places: placesReducer,
  session: SessionReducer
});

export default rootReducer;
