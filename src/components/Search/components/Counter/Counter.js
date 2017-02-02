/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDecrementButtonClick = this.handleDecrementButtonClick.bind(this);
    this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this);
    this.onToggle = this.onToggle.bind(this);

    this.state = {
      isOpen: false,
      count: 1,
    };
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
  handleDocumentClick() {
    if (this.state.isOpen) {
      this.onToggle();
    }
  }
  handleIncrementButtonClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrementButtonClick() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
          Guests: {this.state.count}
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <p>Guests: {this.state.count}</p>
          <button className="btn" onClick={this.handleDecrementButtonClick}>-</button>
          <button className="btn" onClick={this.handleIncrementButtonClick}>+</button>
        </div>
      </div>
    );
  }
}
