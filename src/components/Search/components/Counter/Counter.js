/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
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
    const { increment, decrement, counter } = this.props;
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
          Guests: {counter}
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <p>
            Guests: {counter}
            <button className="btn btn-default" onClick={decrement}>-</button>
            <button className="btn btn-default" onClick={increment}>+</button>
          </p>
        </div>
      </div>
    );
  }
}
