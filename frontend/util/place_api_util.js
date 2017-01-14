export const fetchPlaces = () => (
   $.ajax({
    method: "GET",
    url: 'api/places',
    error: (err) => console.log(err)
  })
);

export const fetchPlace = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}`
  });
};
