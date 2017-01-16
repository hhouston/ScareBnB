export const fetchPlaces = (filters) => (
   $.ajax({
    method: "GET",
    url: 'api/places',
    filters
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
