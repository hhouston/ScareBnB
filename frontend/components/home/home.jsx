import PlacesIndexContainer from '../places/places_container';

import React from 'react';

class Home extends React.Component {

  render() {
    return(
      <div className="home-content">
        <PlacesIndexContainer />
      </div>
    );
  }
}

export default Home;
