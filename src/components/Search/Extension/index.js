import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as filtersSelectors from '../../../reducers/filter';

import Extension from './presenter';

function mapStateToProps(state) {
  const checkboxGroup = state.checkboxGroup;
  const cbGroupActive = state.checkboxGroup.cbGroupActive;
  const perfectOption = state.perfectOption;
  const bedroom = state.bedroom;
  const instantBookCheckbox = state.instantBookCheckbox;
  const currentFilters = filtersSelectors.getActiveFilters(state);

  return {
    bedroom,
    checkboxGroup,
    cbGroupActive,
    perfectOption,
    instantBookCheckbox,
    currentFilters,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementBedroom: bindActionCreators(actions.incrementBedroom, dispatch),
    onDecrementBedroom: bindActionCreators(actions.decrementBedroom, dispatch),
    onSetCheckboxGroupItem: bindActionCreators(actions.setCheckbox, dispatch),
    onToggleCbGroup: bindActionCreators(actions.toggleCbGroup, dispatch),
    onSetPerfectOption: bindActionCreators(actions.setPerfectOption, dispatch),
    onFilterSend: bindActionCreators(actions.onFilterSend, dispatch),
    onFilterCancel: bindActionCreators(actions.onFilterCancel, dispatch),
    onInstantBookToggle: bindActionCreators(actions.instantBookToggle, dispatch),
    onDeleteFilterItem: bindActionCreators(actions.deleteFilterItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extension);
