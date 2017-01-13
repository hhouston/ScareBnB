# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
      info: "this was a prison"
    },
    {
      host_id: 1,
      name: "coit tower",
      location: "san francisco",
      price: 20,
      rating: 3.4,
      lat: 37.802289,
      long: -122.405773,
      image_url: "https://en.wikipedia.org/wiki/File:Coittower1.jpg",
      info: "this was a prison"
    }
  ]
)
