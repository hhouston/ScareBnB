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
        <p>{this.props.review.text}</p>
        // TODO: add access to the user through review
        <span>{this.props.review.fname}</span>
        {
          this.props.review.author_id === userId ? <button onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button> : ""
        }
      </div>
    );
  }
}

export default ReviewIndexItem;
