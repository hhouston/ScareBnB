import * as PlaceAPIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';


export const fetchPlaces = () => dispatch => {
  PlaceAPIUtil.fetchPlaces()
    .then(places => dispatch(receivePlaces(places)));
};

export const receivePlaces = (places) => ({
  type: RECEIVE_PLACES,
  places
});
