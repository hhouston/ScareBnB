import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import {SingleDatePicker} from 'react-dates';
import {withRouter} from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';
class PlaceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            price: '',
            lat: 201.33,
            long: 22.22,
            image_url: '',
            info: '',
            guests: 1,
            place_type: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        Cloudinary::Uploader.upload('/home/my_image.jpg')

        this.props.createPlace(this.state).then(data => {
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

                        <div className="location">
                            Location:
                            <div className="form-group">
                                <input type="text" value={this.state.location} onChange={this.update('location')} className="form-control" placeholder="Address"/>
                            </div>
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
                            <label>Select a photo</label>
                            <input type="file" value={this.state.image_url} onChange={this.update('image_url')} className="form-control-file" aria-describedby="fileHelp"/>
                              <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}>
                                <p>Drop an image or click to select a file to upload.</p>
                              </Dropzone>
                            <small id="fileHelp" className="form-text text-muted">*Please add a picture of the listing*</small>

                        </div>

                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(PlaceForm);
