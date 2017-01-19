import PlacesIndexContainer from '../places/places_container';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
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
