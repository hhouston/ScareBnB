import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userId;
    if(this.props.currentUser) {
      userId = this.props.currentUser.id;
    }
    return(

      <div className="review-index-item">
          <h4>Reviews</h4>

          <span>{this.props.review.fname} - Rating: {this.props.review.rating}</span>
          <span>{this.props.review.rating}</span>

          <div className="review-body">

          <p>{this.props.review.text}</p>
        </div>
        {
          this.props.review.author_id === userId ? <button onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button> : ""
        }
      </div>
    );
  }
}

export default ReviewIndexItem;
