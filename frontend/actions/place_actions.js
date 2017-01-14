import * as PlaceAPIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const fetchPlace = id => dispatch => {
  PlaceAPIUtil.fetchPlace(id)
    .then(place => dispatch(receivePlace(place)));
};

export const receivePlace = (place) => ({
  type: RECEIVE_PLACE,
  place
});

export const fetchPlaces = () => dispatch => {
  PlaceAPIUtil.fetchPlaces()
    .then(places => dispatch(receivePlaces(places)));
};

export const receivePlaces = (places) => ({
  type: RECEIVE_PLACES,
  places
});
