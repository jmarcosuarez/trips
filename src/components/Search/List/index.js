import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import FilterList from '../components/FilterList';
import styles from './List.css';

class List extends React.Component {

  componentDidUpdate() {
  }

  renderNav() {
    const { currentFilters } = this.props;
    return (
      <div className={styles.list}>
        <FilterList currentFilters={currentFilters} />
      </div>
    );
  }

  render() {
    return <div className={styles.filterList}>{this.renderNav()}</div>;
  }

}

function mapStateToProps(state) {
  return {
    currentFilters: state.filter.get('filters'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

List.propTypes = {
  currentFilters: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
