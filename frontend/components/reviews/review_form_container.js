import { connect } from 'react-redux';
import ReviewForm from './review_form';

import { createReview } from '../../actions/review_actions';

import { reviewedPlace } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    place: state.place,
    reviewed: reviewedPlace(state.reviews, state.session.currentUser )
  });
};

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
