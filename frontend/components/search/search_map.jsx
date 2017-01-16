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
        <Map />
        <h2>search</h2>
        <h2>search</h2>
        <h2>search</h2>
      </div>
    );
  }
}

export default Search;
