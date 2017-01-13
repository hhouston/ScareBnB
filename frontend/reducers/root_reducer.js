import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import placesReducer from './places_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    places: placesReducer
});

export default rootReducer;
