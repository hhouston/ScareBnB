import React from 'react';
import Rater from 'react-rater';

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
          <div className="container">
            <span style={{fontSize:"30px"}}>{this.props.review.fname}</span>
            <Rater rating={this.props.review.rating} interactive={false} style={{float: "right"}}/>
          </div>
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
