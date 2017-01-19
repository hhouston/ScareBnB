export const createBooking = (booking) => {
  return $.ajax({
    method: "POST",
    url: 'api/bookings',
    data: {booking}
  });
};

export const fetchBookings = () => {
  return $.ajax({
    method: "GET",
    url: 'api/bookings',
  });
};

export const deleteBooking = (id, success) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`,
    success
  });
};
