export const fetchPlaces = (data) => (
  $.ajax({
    method: "GET",
    url: 'api/places',
    data
  })
);
