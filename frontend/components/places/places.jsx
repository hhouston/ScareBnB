import React from 'react';
import {withRouter} from 'react-router';

class Places extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchPlaces();
    }

    render() {

        return (
            <div className="featured-places-main">
                <div className="places row">
                    {this.props.places.map(place => <div className="" key={place.id}>
                        <div className="thumbnail col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{maxWidth: "300px"}}>
                            <a href={`#/places/${place.id}`}><img className="thumbnail-img" src={place.image_url} alt="image not available"/></a>
                              <div className="caption center-caption">

                                    <div className="places-item-name">
                                        <h2>{place.name}</h2>
                                    </div>

                                    <div className="">
                                        <p>{place.location}</p>
                                        <p>Price: ${place.price}/night</p>
                                        <p>Rating: {place.rating}</p>
                                    </div>
                              </div>
                        </div>
                    </div>)
}
                </div>
            </div>
        );
    }
}

export default Places;
