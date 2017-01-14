import { RECEIVE_PLACE, RECEIVE_REVIEWS } from '../actions/place_actions';

const placeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLACE:
      return action.place;
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;

  }

};

export default placeReducer;
