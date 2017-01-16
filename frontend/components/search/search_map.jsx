import React from 'react';
import Map from './map';
import PlacesIndexContainer from '../places/places_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>search</h2>
        <PlacesIndexContainer />
        <div className="map-right-side">
          <Map
            places={this.props.places}
            updateFilter={this.props.updateFilter} />
        </div>

        <h2>search</h2>
      </div>
    );
  }
}

export default Search;
