import React from 'react';

let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
};

class Map extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return <div id="map-container" ref="map">Map</div>;

  }
}

export default Map;
