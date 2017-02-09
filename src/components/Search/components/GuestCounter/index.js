/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import styles from './GuestCounter.css';

export default class GuestCounter extends Component {
  constructor(props) {
    super(props);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    global.window.addEventListener('click', this.onDocumentClick);
  }
  componentWillUnmount() {
    global.window.removeEventListener('click', this.onDocumentClick);
  }
  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onDocumentClick() {
    if (this.state.isOpen) {
      this.onToggle();
    }
  }

  render() {
    const { onIncrementGuest, onDecrementGuest, guestCounter } = this.props;
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
          Guests: {guestCounter} <i className="glyphicon glyphicon-menu-down" />
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <p>
            <button className="btn btn-default" onClick={onDecrementGuest}>-</button>
            <button className="btn btn-default" onClick={onIncrementGuest}>+</button>
          </p>
        </div>
      </div>
    );
  }
}
