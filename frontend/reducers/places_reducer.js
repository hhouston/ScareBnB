import { RECEIVE_PLACES } from '../actions/place_actions';

const placesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLACES:
      return action.places;
    default:
      return state;
  }
};

export default placesReducer;
