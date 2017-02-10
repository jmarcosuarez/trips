import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './HomeActions';
import Stream from './presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks,
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
