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
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="map-top">
                                  <Map places={this.props.places} updateFilter={this.props.updateFilter}/>
                              </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="filter-bottom">
                                  <h1 style={{textAlign:"center"}}>Results</h1>
                                  <br />
                                  <PlacesIndexContainer/>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        );
    }
}

export default Search;
