import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/search';

import Search from './presenter';

function mapStateToProps(state) {
  const data = state.data;
  return {
    data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(actions.setOption, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
