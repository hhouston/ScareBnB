import React from 'react';
import Map from './map';
import PlacesIndexContainer from '../places/places_container';
import FilterForm from './filter_form';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="filter-section">
                  <FilterForm updateFilter={this.props.updateFilter}/>
                  <div className="map-top">
                    <Map places={this.props.places} updateFilter={this.props.updateFilter}/>
                  </div>
                  <div className="filter-bottom">
                        <PlacesIndexContainer/>
                  </div>
            </div>
        );
    }
}

export default Search;
