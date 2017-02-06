import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Extension from './presenter';

function mapStateToProps(state) {
  const checkboxGroup = state.checkboxGroup;
  const perfectOption = state.perfectOption;
  const bedroom = state.bedroom;

  return {
    bedroom,
    checkboxGroup,
    perfectOption,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incrementBedroom: bindActionCreators(actions.incrementBedroom, dispatch),
    decrementBedroom: bindActionCreators(actions.decrementBedroom, dispatch),
    setCheckbox: bindActionCreators(actions.setCheckbox, dispatch),
    setSelectedOption: bindActionCreators(actions.setSelectedOption, dispatch),
    onFilterSend: bindActionCreators(actions.onFilterSend, dispatch),
    onFilterCancel: bindActionCreators(actions.onFilterCancel, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extension);
