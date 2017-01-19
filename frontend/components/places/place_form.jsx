import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import {withRouter} from 'react-router';
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';
import { createPlace } from '../../actions/place_actions';

const CLOUDINARY_UPLOAD_PRESET = 'upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/drhenvicq/upload';
class PlaceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            price: '',
            lat: null,
            long: null,
            image_url: '',
            info: '',
            guests: 1,
            place_type: '',
            uploadedFile: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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

            this.setState({lat: lat, long: lng});
            console.log(`Yay! got latitude and longitude for ${address}`, {lat, lng});
        });

    }

    render() {
        const geocoder = new google.maps.Geocoder();

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="create-form-box">
                    <h2>Add a Place</h2>

                    <div className="new-listing-container">
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

                        <div className="form-group">
                            <label>Max Capacity</label>
                            <select className="form-control" value={this.state.guests} onChange={this.update('guests')}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6+</option>
                            </select>
                        </div>

                        <div className="search">
                            Address:
                            <PlacesAutocomplete
                              value={this.state.address}
                              onChange={this.updateAddress}
                            />

                            <button onClick={this.handleSearch} type="submit">Submit</button>

                        </div>

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

                        <div className="form-group">
                            <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}></Dropzone>
                            <small id="fileHelp" className="form-text text-muted">*Drop an image or click to select a file to upload.*</small>

                        </div>

                        <button type="Submit" className="btn btn-primary">Save</button>
                    </div>
                    <img src={this.state.image_url}/>
                </form>
            </div>
        );
    }
}

export default withRouter(PlaceForm);
