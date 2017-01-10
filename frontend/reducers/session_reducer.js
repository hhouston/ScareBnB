import { merge } from 'lodash/merge';


const sessionReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
