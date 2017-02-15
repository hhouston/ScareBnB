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
          <h2>{this.props.review.fname}</h2>
          <div className="stars starrr" data-rating={this.props.review.rating}></div>
          <div className="container">
              {
                this.props.review.author_id === userId ? <a onClick={() => this.props.deleteReview(this.props.review.id)} className="glyphicon glyphicon-remove" style={{float: "right"}}></a> : ""
              }
              <pre>{this.props.review.text}</pre>
          </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
