import React from 'react';
import Map from './map';
import PlacesIndexContainer from '../places/places_container';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>search</h2>
        <FilterForm
          updateFilter={this.props.updateFilter}
          />
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
