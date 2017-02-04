import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Extension from './presenter';

function mapStateToProps(state) {
  const data = state.data;
  const counter = state.counter;
  const filters = state.filters;
  const perfectOption = state.perfectOption;

  return {
    data,
    counter,
    filters,
    perfectOption,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(actions.setOption, dispatch),
    increment: bindActionCreators(actions.increment, dispatch),
    decrement: bindActionCreators(actions.decrement, dispatch),
    setFilters: bindActionCreators(actions.setFilters, dispatch),
    setSelectedOption: bindActionCreators(actions.setSelectedOption, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extension);
