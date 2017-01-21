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
    },
    {
      host_id: 1,
      name: "Adams Grove",
      location: "Dallas County",
      price: 55.55,
      rating: 3.4,
      lat: 37.826969,
      long: -122.422709,
      image_url: "https://res.cloudinary.com/drhenvicq/image/upload/v1484956161/220px-Adams_Grove_Presbyterian_Church_vwgzx2.jpg",
      info: "Adams Grove Presbyterian Church and the adjacent cemetery in Dallas County are, according to ghost hunting groups, reportedly haunted[1]",
      guests: 7,
      place_type: "place"
    },
    {
      host_id: 1,
      name: "The Dr. John Drish House",
      location: "Tuscaloosa",
      price: 55.55,
      rating: 3.4,
      lat: 38.826969,
      long: -120.422709,
      image_url: "https://res.cloudinary.com/drhenvicq/image/upload/v1484956233/220px-Drish_House_Tuscaloosa_01_oi3rd7.jpg",
      info: "The Dr. John R. Drish House in Tuscaloosa has a tower that has reportedly been seen on numerous occasions to be on fire, when no fire was actually there. Also, ghostly lights are said to have been seen emanating from house.[3]",
      guests: 6,
      place_type: "place"
    },
    {
      host_id: 1,
      name: "Sweetwater Mansion",
      location: "Florence, Italy",
      price: 5500.50,
      rating: 5,
      lat: 50.826969,
      long: -70.422709,
      image_url: "https://res.cloudinary.com/drhenvicq/image/upload/v1484956331/220px-Sweetwater_Mansion_Florence_pedbho.jpg",
      info: "this was a prison",
      guests: 13,
      place_type: "place"
    },
    {
      host_id: 1,
      name: "Bird Cage Theatre",
      location: "Tombstone, Arizona",
      price: 55.55,
      rating: 3.4,
      lat: 37.56969,
      long: -122.322709,
      image_url: "https://res.cloudinary.com/drhenvicq/image/upload/v1484956470/300px-BirdcageTheater_ge4ge6.jpg",
      info: "The Bird Cage Theatre opened on December 26, 1881, It was owned by Lottie and William Billy Hutchinson. Hutchison, a variety performer, originally intended to present respectable family shows like that he'd seen in San Francisco that were thronged by large crowds. After the Theatre opened, they hosted a Ladies Night for the respectable women of Tombstone, who could attend for free. But the economics of Tombstone didn't support their aspirations. They soon canceled the Ladies Night and began offering baser entertainment that appealed to the rough mining crowd.[1]",
      guests: 43,
      place_type: "place"
    }
  ]
)

Review.create(
  [
    {
      author_id: 1,
      place_id: 1,
      text: "I really liked this place! Very scary.",
      rating: 5
    },
    {
      author_id: 2,
      place_id: 2,
      text: "No way!! Too scary for me I will not be going back",
      rating: 1
    },
    {
      author_id: 2,
      place_id: 3,
      text: "This is long overdue, Rebecca did my daughter's first birthday party in April 2016 and she was really amazing. The adults and kids both were engaged, she was very patient and polite.
Infact,many people have taken your info from me. Thanks for making Mansa's day special!",
      rating: 3
    },
    {
      author_id: 1,
      place_id: 4,
      text: "We had Rebecca for my daughter's 1st year birthday party and she was awesome ! Kids as well as the adults were very well entertained. She was really patient and also performed extra bubble tricks so that we could get some good pictures. She was great to work with from the start and very patient while answering loads of questions :-) Would highly recommend her !",
      rating: 5
    },
    {
      author_id: 1,
      place_id: 5,
      text: "You never know what you are going to get. Her moods are all over the board. Easily irritated and expensive. If I'm paying 300+ for a show I expect great costumer service. Won't use her again",
      rating: 3
    },
    {
      author_id: 2,
      place_id: 6,
      text: "Saw the bubble lady at a party today. Actually the 2nd time I have seen her...and wow...impressed! She captivated the crowd. They were enthralled. Highly recommend!",
      rating: 5
    },
    {
      author_id: 2,
      place_id: 1,
      text: "Oh my, bubble lady did a fantastic job and entertained not just the kids but mesmerized the adults. I recommended her to many of my friends and they all liked her show.",
      rating: 3
    },
    {
      author_id: 2,
      place_id: 2,
      text: "My friend and I recently had readings done here. We enjoyed our readings, we felt there were some things that she picked up on that she couldn't have possibly known. She was very welcoming and a nice advice giver. It's is too early to tell whether the predictions will come true. However, we recommend stopping by.",
      rating: 5
    },
    {
      author_id: 1,
      place_id: 1,
      text: "This tour was amazing. After a short cruise to Alcatraz Island, we were given a short introductory talk and turned loose to explore the most notorious prison in the entire United States.
We started with an audio tour that was in depth and thorough. It even featured short narratives from guards and others that worked at the prison. Their own voices; their own words.
After the tour, we were free to explore the island on our own and then visit the bookstores and browse for souvenirs. This is indeed a five star excursion.",
      rating: 5
    },
    {
      author_id: 2,
      place_id: 4,
      text: "It was a dark and stormy night...No really, it was dark and stormy as the four of us took the night tour at Alcatraz.  The boat ride over wasn't bad at all considering the high winds and crazy rain.  The tour itself is very well done (A prerecorded guide moves you from place to place giving you insights that are mind-boggeling!).",
      rating: 5
    }
  ]
)

Booking.create(
  [
    {
      guest_id: 1,
      place_id: 2,
      start_date: "2012-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 1,
      place_id: 1,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 2,
      place_id: 3,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 2,
      place_id: 5,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 1,
      place_id: 5,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
    {
      guest_id: 2,
      place_id: 6,
      start_date: "2017-01-20",
      end_date: "2018-04-22"
    },
  ]
)
