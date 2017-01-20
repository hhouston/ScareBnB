import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            rating: 1,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.clearReviewForm = this.clearReviewForm.bind(this);
    }

    clearReviewForm() {
      this.setState({
        text:"",
        rating: 1
      });
    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    handleSubmit(e) {

      const review = Object.assign({}, this.state, {
        place_id: this.props.place.id,
      });


      e.preventDefault();
      this.props.createReview(review);
      this.clearReviewForm();

    }


    render() {

      if (this.props.reviewed) {
        return <div></div>;
      }
        return (


            <div>
                <form onSubmit={this.handleSubmit} className="create-review-form">

                    <div className="form-group">
                        <label>Rating:</label>
                        <select className="form-control" value={this.state.rating} onChange={this.update('rating')}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <textarea className="form-control" value={this.state.text} onChange={this.update('text')} rows="3" placeholder="Enter review.."/>
                    </div>

                    <button type="submit">Review</button>
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);
