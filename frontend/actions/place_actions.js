import * as PlaceAPIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEW';

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


export const fetchReviews = (placeId) => dispatch => {
  PlaceAPIUtil.fetchReviews(placeId)
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});
