import React from 'react';
import { withRouter } from 'react-router';

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBookings();
  }

  render() {
    return(
      <div className="featured-bookings-main">
          <div className="row">
            <h1>my bookings</h1>
              {
                this.props.bookings.map(booking =>
                  <div className="col-xs-12 col-sm-6 col-md-4" key={booking.id}>
                    <div className="thumbnail" style={{height: '400px'}} >
                      <img src={booking.image_url} alt="image not available" />
                      <div className="caption">
                        <h2>{booking.name}</h2>
                        <p>{booking.info}</p>
                        <p>Price: ${booking.price}/night</p>
                        <p>Rating: {booking.rating}</p>
                        <p>MaxCapacity: {booking.guests}</p>
                        <p>
                          <button onClick={() => this.props.deleteBooking(booking.id)}>Delete</button>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
        </div>
      </div>
    );
  }
}

export default BookingsIndex;
