/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import styles from './Bedroom.css';

export default class Bedroom extends Component {
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
    const { incrementBedroom, decrementBedroom, bedroom } = this.props;
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
          Rooms: {bedroom}
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <p>
            Rooms: {bedroom}
            {' '}
            <button onClick={incrementBedroom}>+</button>
            {' '}
            <button onClick={decrementBedroom}>-</button>
          </p>
        </div>
      </div>
    );
  }
}
