import React from 'react';
import {withRouter} from 'react-router';
import SearchForm from '../search/SearchForm';
import SearchMapContainer from '../search/search_container';

class FeaturedPlaces extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const exp_image = "https:res.cloudinary.com/drhenvicq/image/upload/v1484902595/Screen_Shot_2017-01-20_at_12.53.28_AM_wsjm2x.png";
        const solo_image = "https:res.cloudinary.com/drhenvicq/image/upload/c_scale,h_338/v1484902843/woods-scary_a2pa9b.jpg";
        const house_image = "https://res.cloudinary.com/drhenvicq/image/upload/v1484901709/27bba254451cf97e988620e0e30c539e_leuium.jpg";

        return (

          <div className="place-types">

            <h1 style={{textAlign: "center"}}>Featured Places</h1>
            <div className="row featured-places-row">
              <br />
              <br />
              <br />
              <div className="featured-item col-xs-12 col-sm-12 col-md-3 col-lg-3" key={1}>
                <div className="thumbnail" >

                  <a href={`#/search/house`}>
                    <img className="featured-places-thumbnail" src={house_image} alt="image not available"/>
                  </a>
                  <h2 className="text-center">Haunted House</h2>

                  <div className="house-item">
                  </div>
                </div>
              </div>
              <div className="featured-item col-xs-12 col-sm-12 col-md-3 col-lg-3" key={2}>
                <div className="thumbnail">
                  <a href={`#/search/solo`}><img className="featured-places-thumbnail" src={solo_image} alt="image not available"/></a>
                  <div className="solo-item">
                    <h2 className="text-center">SOLO</h2>
                  </div>
                </div>
              </div>
              <div className="featured-item col-xs-12 col-sm-12 col-md-3 col-lg-3" key={3}>
                <div className="thumbnail">
                  <a href={`#/search/experiences`}><img className="featured-places-thumbnail" src={exp_image} alt="image not available"/></a>
                  <div className="experience-item">
                    <h2 className="text-center">Experiences</h2>
                  </div>
                </div>
              </div>

              <SearchMapContainer />

            </div>
          </div>
        );
    }
}

export default FeaturedPlaces;
