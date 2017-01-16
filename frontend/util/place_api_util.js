export const fetchPlaces = (data) => (
   $.ajax({
    method: "GET",
    url: 'api/places',
    data
  })
);

export const fetchPlace = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}`
  });
};

export const fetchReviews = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}/reviews`
  });
};
