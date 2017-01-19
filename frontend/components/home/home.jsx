import PlacesIndexContainer from '../places/places_container';
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
// <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.update = (address) => this.setState({ address })
    this.getLatLongFromAddress = this.getLatLongFromAddress.bind(this);
  }

  getLatLongFromAddress(location) {
    console.log(location);
  }

  handleSearch(e) {
      e.preventDefault();
      const { address } = this.state;

      geocodeByAddress(address,  (err, { lat, lng }) => {
        if (err) {
          console.log('Oh no!', err);
        }

        // const review = Object.assign({}, this.state, {
        //   lat: lat,
        //   lng: lng
        // }
        // console.log(`Yay! got latitude and longitude for ${ address }`, { lat, lng });
      });



      // debugger;
      //   this.props.search(this.state).then(data => {
      //       this.props.router.push(`/places/${data.place.id}`);
      // });
  }


  render() {
    const geocoder = new google.maps.Geocoder();

    return(
      <div>

        <div className="search-bar" style={{width: '90%'}}>
          <form onSubmit={this.handleSearch}>
              <PlacesAutocomplete
                style={{width: '90%'}}
                value={this.state.searh_value}
                onChange={this.update}
              />

              <button type="submit">Submit</button>

          </form>
        </div>

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
//     <button onClick={() => this.getLatLongFromAddress(this.state.address)}>Search</button>
//   </div>
