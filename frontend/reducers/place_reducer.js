import { RECEIVE_PLACE } from '../actions/place_actions';
import merge from 'lodash/merge';

const placeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLACE:
      return action.place;
    default:
      return state;

  }

};

export default placeReducer;
