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
                <div className="row form-inline">
                    <h1>featured places</h1>
                    {this.props.places.map(place => <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2" key={place.id}>
                        <div className="thumbnail">
                            <a href={`#/places/${place.id}`}><img className="thumbnail-img" src={place.image_url} alt="image not available"/></a>
                            <div ></div>

                                <div className="places-item-name">
                                    <h2>{place.name}</h2>

                                </div>

                                <div className="">
                                    <p>{place.location}</p>
                                    <p>Price: ${place.price}/night</p>
                                    <p>Rating: {place.rating}</p>
                                </div>

                                <p>
                                    <a href={`#/places/${place.id}`} className="btn btn-primary" role="button">Book</a>
                                </p>

                        </div>
                    </div>)
}
                </div>
            </div>
        );
    }
}

export default Places;
