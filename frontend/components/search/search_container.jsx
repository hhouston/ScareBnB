import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search_map';

const mapStateToProps = state => {
  debugger;
  return ({
    places: asArray(state.places),
    maxGuest: state.filters.maxGuest
  });
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
