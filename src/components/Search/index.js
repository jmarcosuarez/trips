import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as rangeSelectors from '../../reducers/rangeInput';

import Search from './presenter';

function mapStateToProps(state) {
  const guestCounter = state.guestCounter;
  const dateInput = state.dateInput;
  const rangeInput = rangeSelectors.getRangeInputArray(state);


  return {
    guestCounter,
    dateInput,
    rangeInput,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementGuest: bindActionCreators(actions.incrementGuest, dispatch),
    onDecrementGuest: bindActionCreators(actions.decrementGuest, dispatch),
    onSetDates: bindActionCreators(actions.setDates, dispatch),
    onSetPriceRange: bindActionCreators(actions.setPriceRange, dispatch),
    onSavePriceRange: bindActionCreators(actions.savePriceRange, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
