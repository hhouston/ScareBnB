import { RECEIVE_PLACE, RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/place_actions';
import merge from 'lodash/merge';

const placeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLACE:
      return action.place;
    case RECEIVE_REVIEW:
      const newState = merge({}, state);
      newState.reviews = newState.reviews.concat(action.review);
      return newState;
    default:
      return state;

  }

};

export default placeReducer;
