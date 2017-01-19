import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_BOOKING_ERRORS";


export const createReview = (newReview) => dispatch => (
  ReviewAPIUtil.createReview(newReview)
    .then(review => dispatch(receiveReview(review)))
);

export const fetchReviews = (placeId) => dispatch => (
  ReviewAPIUtil.fetchReviews(placeId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const deleteReview = (id) => dispatch => (
  ReviewAPIUtil.deleteReview(id)
    .then(review => dispatch(removeReview(review)))
);

export const removeReview = (id) => dispatch => ({
  type: REMOVE_REVIEW,
  id
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});