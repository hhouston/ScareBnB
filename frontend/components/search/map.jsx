/* global google: false */
import React from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLong => ({
  lat: latLong.lat(),
  long: latLong.long()
});

let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
};

class Map extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.places);
  }

  componentDidUpdate() {
    debugger;
    this.MarkerManager.updateMarkers(this.props.places);
  }

  _registerListeners() {
  google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat:north, long: east },
      southWest: { lat: south, long: west } };
    this.props.updateFilter('bounds', bounds);
  });

  // google.maps.event.addListener(this.map, 'click', event => {
  //   const coords = _getCoordsObj(event.latLong);
  //   this._handleClick(coords);
  // });
}

    _handleMarkerClick(place) {
      //change this to load detail of a place
    // this.props.router.push(`places/${place.id}`);
  }

  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "places/new",
  //     query: coords
  //   });
  // }

  render() {
    return <div id="map-container" ref="map">Map</div>;
  }
}

export default Map;
