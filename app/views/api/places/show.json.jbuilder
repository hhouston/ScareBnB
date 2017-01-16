json.partial! '/api/places/place', place: @place

json.reviews do
  json.partial! 'api/reviews/review', collection: @place.reviews, as: :review
end
