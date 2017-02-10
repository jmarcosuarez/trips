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
    const { currentFilters } = this.props;
    return (
      <div className={styles.list}>
        <Title title={'Notice Bar Title'} />
        <FilterList currentFilters={currentFilters} />
      </div>
    );
  }

  render() {
    return <div className={styles.filterList}>{this.renderToolBar()}</div>;
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
