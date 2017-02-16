import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import {withRouter} from 'react-router';
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';
import { createPlace } from '../../actions/place_actions';

const CLOUDINARY_UPLOAD_PRESET = 'upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/drhenvicq/upload';
class PlaceFormStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            name: '',
            address: '',
            price: '',
            lat: null,
            long: null,
            image_url: '',
            info: '',
            guests: 1,
            place_type: 'solo',
            uploadedFile: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.currentPage = this.currentPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.update = this.update.bind(this);
        this.updateAddress = (address) => this.setState({ address });

    }

    onImageDrop(files) {
        this.setState({uploadedFile: files[0]});

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({image_url: response.body.secure_url});
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const place = {
            currentPage: this.state.currentPage,
            name: this.state.name,
            location: this.state.address,
            price: this.state.price,
            lat: this.state.lat,
            long: this.state.long,
            image_url: this.state.image_url,
            info: this.state.info,
            guests: this.state.guests,
            place_type: this.state.place_type
        };

        this.props.createPlace(place).then(data => {
            this.props.router.push(`/places/${data.place.id}`);
        });

    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    handleSearch(e) {
        e.preventDefault();
        const {address} = this.state;
        geocodeByAddress(address, (err, {lat, lng}) => {
            if (err) {
                console.log('Oh no!', err);
            }
            console.log('lat: ', lat);
            console.log('lng: ', lng);

            this.setState({lat: lat, long: lng});
        });

    }

    nextPage() {
      this.setState({currentPage:this.state.currentPage + 1});
    }
    prevPage() {
      this.setState({currentPage:this.state.currentPage - 1});
    }

    currentPage() {
      if (this.state.currentPage === 1 || this.state.currentPage === undefined) {
          return(
              <div className="new-listing-container">
                <br />
                <h2>Add a Place</h2>
                  <div className="form-group">
                      <label>Listing Name:</label>
                      <input type="text" value={this.state.name} className="form-control" placeholder="Name" onChange={this.update('name')}/>
                  </div>

                  <div className="form-group">
                      <label>Choose the type of listing:
                      </label>
                      <select className="form-control" value={this.state.place_type} onChange={this.update('place_type')}>
                          <option default>Private Room</option>
                          <option>Entire Residence</option>
                          <option>Experience</option>
                      </select>
                  </div>

                  <div style={{display: "flex", justifyContent: "center"}}>
                      <button onClick={this.nextPage}>Next</button>
                  </div>
                </div>
          );
      } else if (this.state.currentPage === 2) {

        let placePicture;
        if (this.state.image_url === "") {
            placePicture =
            <div>
                <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}></Dropzone>
                <small id="fileHelp" className="form-text text-muted">*Drop an image or click to select a file to upload.*</small>
            </div>;
        } else {
            placePicture = "";
        }

        return (

            <div className="pageTwo">
                <div className="search">
                  Address: (**PRESS SUBMIT**)
                  <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.updateAddress}
                    />

                  <button onClick={this.handleSearch} type="submit">Submit</button>
                  <p style={{fontSize: "85%"}}> (converts address to coordinates)</p>
                </div>

                <div className="form-group">
                    <img src={this.state.image_url}/>
                    {placePicture}
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <button onClick={this.prevPage}>Prev</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
      } else if (this.state.currentPage === 3) {

        return (
          <form onSubmit={this.handleSubmit} className="create-form-box">

              <div className="form-group">
                  <label>Listing Price (per night):
                  </label>
                  <input type="text" value={this.state.price} onChange={this.update('price')} className="form-control" placeholder="$"/>
              </div>

              <div className="form-group">
                  <label>About:
                  </label>
                  <textarea className="form-control" value={this.state.info} onChange={this.update('info')} rows="3" placeholder="Enter information about listing"/>
              </div>

              <div style={{display: "flex", justifyContent: "space-between"}}>
                  <button onClick={this.prevPage}>Prev</button>
                  <button type="Submit" className="btn btn-primary">Finish</button>
              </div>
          </form>
        );
      }

    }

    render() {
        const geocoder = new google.maps.Geocoder();

        let currentPage = this.currentPage();
        return (
            <div className="current-page">
              {currentPage}
            </div>
        );
    }
}

export default withRouter(PlaceFormStep);
