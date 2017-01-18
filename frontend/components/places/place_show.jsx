import React from 'react';

class Place extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const placeId = this.props.place.id;
    this.props.fetchPlace(placeId);
  }

  render() {

    let reviews;
    if (this.props.place.reviews) {
      reviews = this.props.place.reviews.map(review => <p>{review.text}</p>);
    } else {
      reviews = "Be the first to review this place!";
    }
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <img src="https://www.familytree.com/wp-content/uploads/2014/04/alcatraz.jpg" alt="Image Not Available" />
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
      </div>
    );
  }
}

export default Place;
