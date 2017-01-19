import PlacesIndexContainer from '../places/places_container';
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
// <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_value: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.update = this.update.bind(this);
    this.getLatLongFromAddress = this.getLatLongFromAddress.bind(this);
  }

  getLatLongFromAddress(location) {
    debugger;
    console.log(location);
  }

  handleSearch(e) {
      e.preventDefault();
        this.props.search(this.state).then(data => {
            this.props.router.push(`/places/${data.place.id}`);
      });
  }

  update(property) {
      return e => this.setState({[property]: e.target.value});
  }

  errors() {
      if (this.props.errors) {
          return (this.props.errors.map(error => {
              return (
                  <li className="error" key={error}>{error}</li>
              );
          }));
      }
  }

  render() {
    const geocoder = new google.maps.Geocoder();

    return(
      <div>
        <div className="splash-img">
          <h2>Enter if you dare..</h2>
          
          <div className="featured-places">
            <div className="featured-places-bg">
              <PlacesIndexContainer />
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default Home;
// <div className="featured-places">
//   <div className="featured-places-bg">
//     <PlacesIndexContainer />
//   </div>
// </div>
//
//   <div className="search-bar" style={{width: '90%'}}>
//     <PlacesAutocomplete
//       style={{width: '90%'}}
//       value={this.state.searh_value}
//       onChange={this.update}
//     />
//     <button onClick={() => this.getLatLongFromAddress(this.state.search_value)}>Search</button>
//   </div>
