import React from 'react';
import { withRouter, hashHistory } from 'react-router';
class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.showLink = this.showLink.bind(this);
  }

  showLink(booking) {
    return () => hashHistory.push(`places/${booking.id}`);
  }

  componentWillMount() {
    this.props.fetchBookings();
  }

  render() {
    return(
      <div className="bookings-main">
        <h1 style={{marginLeft: "25px"}}>my bookings</h1>
          <div className="row">
              {
                this.props.bookings.map(booking =>
                  <div className="col-xs-12 col-sm-6 col-md-4" key={booking.id}>

                    <div onClick={this.showLink(booking)} className="thumbnail booking-thumbnail" style={{height: '400px'}} >
                      <p style={{float: "right"}}>
                        <button onClick={() => this.props.deleteBooking(booking.id)}>Delete</button>
                      </p>
                      <img src={booking.image_url} alt="image not available"  className="booking-thumbnail-img"/>
                      <div className="caption center-caption">

                        <div>

                          <h2>{booking.name}</h2>
                        </div>
                        <div className='booking-info-container'>
                            <div className="places-item-name">

                                <p>Price: ${booking.price}/night</p>
                                <p>Start: {booking.start_date}</p>
                            </div>
                            <div>
                                <p>Max Capacity: {booking.guests}</p>
                                <p>End: {booking.end_date}</p>
                            </div>
                      </div>



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
