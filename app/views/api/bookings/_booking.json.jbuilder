json.extract! booking, :id, :start_date, :end_date,
                     :guest_id, :place_id

json.set! :image_url, booking.place.image_url
json.set! :price, booking.place.price
json.set! :guests, booking.place.guests
