import React from 'react';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    return(
      <div>
        <h1>places</h1>
          <div className="row">
              {
                this.props.places.map(place =>
                  <div className="col-xs-12 col-sm-6 col-md-4" key={place.id}>
                    <div className="thumbnail">
                      <a href={`#/places/${place.id}`}><img src={place.image_url} alt="image not available" /></a>
                      <div className="caption">
                        <h2>{place.name}</h2>
                        <p>{place.info}</p>
                        <p>Price: ${place.price}/night</p>
                        <p>Rating: {place.rating}</p>
                        <p>MaxCapacity: {place.guests}</p>
                        <p>
                          <a href="#" className="btn btn-primary" role="button">Book</a>
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
