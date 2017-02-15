import { connect } from 'react-redux';
import DateRangePicker from './DateRangePickerWrapper';


import { reviewedPlace } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    place: state.place,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangePicker);
