import React from 'react';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexItemContainer from '../reviews/review_index_item_container';
import DateRangePickerWrapper from '../date_picker/DateRangePickerWrapper';

class Place extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const placeId = parseInt(this.props.params.placeId);
    this.props.fetchPlace(placeId);
    this.props.fetchReviews(placeId);
  }

  render() {
    let reviews;
    if (this.props.reviews) {
      reviews = Object.keys(this.props.reviews).map(id => <ReviewIndexItemContainer key={id} review={this.props.reviews[id]} />);
    } else {
      reviews = "Be the first to review this place!";
    }
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <img src={this.props.place.image_url} alt="Image Not Available" />
              <div className="caption">
                <h3>{this.props.place.name}</h3>
                <p>{this.props.place.info}</p>
              </div>
            </div>
          </div>
        </div>

        <DateRangePickerWrapper
          createBooking={this.props.createBooking}
          placeId={this.props.place.id}
        />

        {
          this.props.place.name
        }

        { this.props.currentUser ? <ReviewFormContainer reviews={reviews}/> : "" }

        <div>
          <h1>Reviews</h1>
            {reviews}
        </div>
      </div>
    );
  }
}

export default Place;
