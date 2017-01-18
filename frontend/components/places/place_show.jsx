import React from 'react';
import ReviewFormContainer from './review_form_container';

class Place extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const placeId = parseInt(this.props.params.placeId);
    this.props.fetchPlace(placeId);
  }

  render() {
    let reviews;
    if (this.props.place.reviews) {
      reviews = this.props.place.reviews.map(review => <p key={review.id}>{review.text}</p>);
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

        {
          this.props.place.name
        }

        <div>
          <h1>Reviews</h1>
          {reviews}
        </div>

        <ReviewFormContainer/>
      </div>
    );
  }
}

export default Place;
