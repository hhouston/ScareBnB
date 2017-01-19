export const fetchPlaces = (filters) => (
   $.ajax({
    method: "GET",
    url: 'api/places',
    data: filters
  })
);

export const fetchPlace = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}`
  });
};

export const createPlace = (place) => {
  return $.ajax({
    method: "POST",
    url: 'api/places',
    data: {place}
  });
};
