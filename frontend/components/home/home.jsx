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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
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
    return(
      <div className="home-content">
        <PlacesAutocomplete className="search-bar" value={this.state.searh_value} onChange={this.update} />
        <PlacesIndexContainer />
      </div>
    );
  }
}

export default Home;
