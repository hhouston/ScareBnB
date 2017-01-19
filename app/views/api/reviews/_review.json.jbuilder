json.extract! review, :id, :rating, :text, :place_id, :author_id

json.set! :fname, review.author.fname
