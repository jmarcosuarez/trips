import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Extension from './presenter';

function mapStateToProps(state) {
  const filters = state.filters;
  const perfectOption = state.perfectOption;
  const bedroom = state.bedroom;

  return {
    bedroom,
    filters,
    perfectOption,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incrementBedroom: bindActionCreators(actions.incrementBedroom, dispatch),
    decrementBedroom: bindActionCreators(actions.decrementBedroom, dispatch),
    setFilters: bindActionCreators(actions.setFilters, dispatch),
    setSelectedOption: bindActionCreators(actions.setSelectedOption, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extension);
