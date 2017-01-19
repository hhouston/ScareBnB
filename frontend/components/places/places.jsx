import React from 'react';
import { withRouter } from 'react-router';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    return(
      <div className="featured-places-main">
          <div className="row">
            <h1>featured places</h1>
              {
                this.props.places.map(place =>
                  <div className="col-xs-12 col-sm-6 col-md-4" key={place.id}>
                    <div className="thumbnail" style={{height: '400px'}} >
                      <a href={`#/places/${place.id}`}><img src={place.image_url} alt="image not available" /></a>
                      <div className="caption">
                        <h2>{place.name}</h2>
                        <p>{place.info}</p>
                        <p>Price: ${place.price}/night</p>
                        <p>Rating: {place.rating}</p>
                        <p>MaxCapacity: {place.guests}</p>
                        <p>
                        <a href={`#/places/${place.id}`} className="btn btn-primary" role="button">Book</a>
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

export default Places;
