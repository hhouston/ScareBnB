```js
{
  session: {
    currentUser: {
      id: 1,
      email: "hhouston@smu.edu",
    },
    errors: [],  
  },
  places: {
    1: {
      id: 1,
      host_id: 1,
      name: "scary place 1",
      location: "San Francisco",
      lat: 54.002,
      long: 63.032,
      image_url: "scary.png",
      rating: 4.00
    },
    2: {
      id: 2,
      host_id: 1,
      name: "scary place 2",
      location: "NYC",
      lat: 70.103,
      long: 102.000,
      image_url: "scary2.png",
      rating: 4.76,
    }
  },
  bookings: [
    {
      id: 1,
      guest_id: 1,
      place_id: 2,
      image_url: "place.jpg",
      start_date: "2012-04-23T18:25:43.511Z",
      end_date: "2013-04-23T18:25:43.511Z"
    },
    {
      id: 1,
      guest_id: 2,
      place_id: 3,
      image_url: "place2.jpg",
      start_date: "2012-04-23T18:25:43.511Z",
      end_date: "2013-04-23T18:25:43.511Z"
    }
  ],
  reviews: {
    1: {
      id: 1,
      author_id: 2,
      rating: 4,
      review: "text of the review",
      fname: "sam"
    }
  }
  profile: {
    fname: "hunter",
    lname: "houston",
    image_url: "prof-pic.jpeg"
  }
}
```
