import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Search from './presenter';

function mapStateToProps(state) {
  const data = state.data;
  const count = state.count;

  return {
    data,
    count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(actions.setOption, dispatch),
    onIncrementCounter: bindActionCreators(actions.setCount, dispatch),
    onDecrementCounter: bindActionCreators(actions.setCount, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
