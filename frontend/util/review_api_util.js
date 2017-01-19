export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: `api/reviews`,
    data: {review}
  })
);

export const fetchReviews = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}/reviews`
  });
};

export const deleteReview = (id, success) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
    success
  });
};
