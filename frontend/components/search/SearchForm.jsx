import React from 'react';
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';
import { createPlace } from '../../actions/place_actions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);


    this.updateAddress = (address) => this.setState({ address });
  }

  handleSearch(e) {
      e.preventDefault();
      const {address} = this.state;
      geocodeByAddress(address, (err, {lat, lng}) => {
          if (err) {
              console.log('Oh no!', err);
          }

          this.setState({lat: lat, long: lng});
          console.log(`Yay! got latitude and longitude for ${address}`, {lat, lng});
      });

  }

  render() {
    return(


          <div className="search-bar-container">
              <div className="location-container search-item">

                <h1>location</h1>
              </div>

              <div className="calender-container search-item">
                <h1>cal</h1>

              </div>

              <div className="guests-container search-item">
                <h1>guest</h1>

              </div>
          </div>



    );
  }
}

export default SearchForm;
