json.extract! place, :id, :name, :info, :lat, :long,
                     :image_url, :rating, :price, :guests,
                     :host_id, :place_type

json.set! :average_rating, place.average_rating
