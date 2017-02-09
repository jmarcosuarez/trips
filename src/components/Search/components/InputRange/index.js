import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './Range.css';

export default class Range extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSend = this.onSend.bind(this);
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
  onSend() {
    this.props.onSavePriceRange(this.props.range);
    this.onToggle();
  }
  handleChange(values) {
    this.props.onSetPriceRange(values);
  }
  handleDocumentClick() {
    if (this.state.isOpen) {
      this.onToggle();
    }
  }
  render() {
    return (
      <div onClick={e => e.stopPropagation()} className={styles.dropdown}>
        <button onClick={this.onToggle}>
         Price: {this.props.range.min} - {this.props.range.max} <i className="glyphicon glyphicon-menu-down" />
        </button>
        <div className={this.state.isOpen ? `${styles.active}` : `${styles.notActive}`}>
          <InputRange
            formatLabel={value => `${value}`}
            step={10}
            maxValue={500}
            minValue={0}
            value={this.props.range}
            onChange={this.handleChange}
          />
          <button className={`${styles.sendButton} btn btn-default`} onClick={this.onSend}>
          Send
          </button>
        </div>
      </div>
    );
  }
}
