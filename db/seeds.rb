# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  [
    {
      email: "guest@email.com",
      password: "password",
      fname: "Demo",
      lname: "User"
    },
    {
      email: "hhouston@smu.edu",
      password: "password",
      fname: "Hunter",
      lname: "Houston"
    }
  ]
)
Place.create(
  [
    {
      host_id: 1,
      name: "alcatraz",
      location: "san francisco",
      price: 55.55,
      rating: 3.4,
      lat: 37.826969,
      long: -122.422709,
      image_url: "https://www.familytree.com/wp-content/uploads/2014/04/alcatraz.jpg",
      info: "this was a prison",
      guests: 3,
      place_type: "place"
    },
    {
      host_id: 1,
      name: "coit tower",
      location: "san francisco",
      price: 20,
      rating: 3.4,
      lat: 37.802289,
      long: -122.405773,
      image_url: "https://res.cloudinary.com/drhenvicq/image/upload/v1484611641/coit_tower_red_and_gold_thumb_evruwf.jpg",
      info: "firehose building",
      guests: 5,
      place_type: "experience"
    }
  ]
)

Review.create(
  [
    {
      author_id: 1,
      place_id: 1,
      text: "this is a review",
      rating: 3
    },
    {
      author_id: 1,
      place_id: 1,
      text: "this is a another review",
      rating: 5
    }
  ]
)

Booking.create(
  [
    {
      guest_id: 1,
      place_id: 1,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 1,
      place_id: 1,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    }
  ]
)
