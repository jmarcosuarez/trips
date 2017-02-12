import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import FilterList from '../components/FilterList';
import Title from '../components/Title';
import styles from './List.css';

class List extends React.Component {

  componentDidUpdate() {
  }

  renderToolBar() {
    const { currentFilters, onDeleteFilterItem } = this.props;
    return (
      <div className={styles.list}>
        <Title title={'Notice Bar Title'} />
        <FilterList
          currentFilters={currentFilters}
          onDeleteFilterItem={(item) => onDeleteFilterItem(item)}
        />
      </div>
    );
  }

  render() {
    return <div className={styles.filterList}>{this.renderToolBar()}</div>;
  }

}

function mapStateToProps(state) {
  return {
    currentFilters: state.filter.get('isFilterActive'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteFilterItem: bindActionCreators(actions.deleteFilterItem, dispatch),
  };
}

List.propTypes = {
  // currentFilters: PropTypes.instanceOf(List),
  onDeleteFilterItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
