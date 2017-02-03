/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onDecrementCounter = this.onDecrementCounter.bind(this);
    this.onIncrementCounter = this.onIncrementCounter.bind(this);
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
  onDecrementCounter() {
    this.props.onDecrementCounterValue(this.props.count);
  }
  onIncrementCounter() {
    this.props.onIncrementCounterValue(this.props.count);
  }

  render() {
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
          Guests
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <p>Guests</p>
          <button className="btn" onClick={this.onDecrementCounter}>-</button>
          <button className="btn" onClick={this.onIncrementCounter}>+</button>
        </div>
      </div>
    );
  }
}
