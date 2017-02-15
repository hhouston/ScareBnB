import PlacesIndexContainer from '../places/places_container';
import FeaturedPlacesContainer from '../home/featured_places_container';
import SearchForm from '../search/SearchForm';

import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const house_image = "https://res.cloudinary.com/drhenvicq/image/upload/v1484901709/27bba254451cf97e988620e0e30c539e_leuium.jpg";

    return(
      <div className="splash-page">

          <section className="splash-img">
            <div className="splash-title">

                <h2 className="scarebnb-title">

                  <span>ScareBnB </span>
                  <p>a mobile friendly site to book spooky adventures.</p>
                </h2>
              </div>
          </section>

          <section className="home-content">
              <FeaturedPlacesContainer />
          </section>

          <section className="home-search-container">
          </section>

      </div>
    );
  }
}

export default Home;
