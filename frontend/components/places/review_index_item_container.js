import { connect } from 'react-redux';
import ReviewIndexItem from './review_index_item';

import { deleteReview, editReview } from '../../actions/place_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch) => ({
  deleteReview: (id) => dispatch(deleteReview(id)),
  editReview: (id) => dispatch(editReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndexItem);
