/* eslint import/no-extraneous-dependencies: 0 */
import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import 'flatpickr/dist/themes/airbnb.css';
import styles from './DateInput.css';

class DateInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  componentDidMount() {
    // global.window.addEventListener('click', this.handleDocumentClick);
  }
  componentWillReceiveProps(nextProps) {
    // Closes dropdown when the 2 dates are selected
    if (this.state.isOpen && nextProps.dates.get('dateInput_end_id') !== undefined) {
      this.setState({ isOpen: false });
    }
  }
  componentWillUnmount() {
    // global.window.removeEventListener('click', this.handleDocumentClick);
  }
  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onClose() {
    this.onToggle();
  }
  //  Right now document click is disabled because it doesn't let choose range of dates
  handleDocumentClick() {
    if (this.state.isOpen) {
      // this.onToggle();
    }
  }
  render() {
    const { dates, onSetDates } = this.props;
    return (
      // <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
      <div className={styles.dropdown}>
        <button onClick={this.onToggle}>
          From: {moment(dates.get('dateInput_start_id')).format('MM/DD/YYYY')}
          - To: {moment(dates.get('dateInput_end_id')).format('MM/DD/YYYY')}
          <i className="glyphicon glyphicon-menu-down" />
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <Flatpickr
            // placeholder={'From -> To'}
            onChange={onSetDates}
            options={{
              mode: 'range',
              inline: true,
              minDate: new Date(),
              // create an extra input solely for display purposes
              altInput: true,
              altFormat: 'm/j/Y',
              // Disable a date interval, or a specific date.
              // disable: [{ from: '2017-02-16', to: '2017-02-19' }, '2017-02-24'],
            }}
          />
          <button className={`${styles.sendButton} btn btn-default`} onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default DateInput;
