/* eslint import/no-extraneous-dependencies: 0 */
import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import styles from './DateInput.css';

class DateInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      start: null,
      end: null,
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  componentDidMount() {
    global.window.addEventListener('click', this.handleDocumentClick);
  }
  componentWillUnmount() {
    global.window.removeEventListener('click', this.handleDocumentClick);
  }
  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onClose() {
    this.onToggle();
  }
  setDateRange(dates, datestr, instance) {
    // this.setState({ start: dates[0], end: dates[1] });
    console.info(dates[0]);
    console.info(dates[1]);
  }
  //  Right now document click is disabled, doesn't let choose range od dates
  handleDocumentClick() {
    if (this.state.isOpen) {
      // this.onToggle();
    }
  }
  render() {
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
         TogglePickr
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <Flatpickr
            placeholder={'From -> To'}
            onChange={this.setDateRange}
            options={{
              mode: 'range',
              inline: true,
              minDate: new Date(),
              // create an extra input solely for display purposes
              altInput: true,
              altFormat: 'm/j/Y',
              // Disable a date interval, or a specific date.
              disable: [
                { from: '2017-02-16', to: '2017-02-19' },
                '2017-02-24',
              ],
            }}
          />
          <button onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default DateInput;
