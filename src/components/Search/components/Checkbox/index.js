import React, { PropTypes, Component } from 'react';
import styles from './Checkbox.css';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    this.props.checkboxChange(this.props.label, this.props.group);
  }

  render() {
    const { label } = this.props;
    return (
      <div className={styles.checkbox}>
        <input
          id={label}
          type="checkbox"
          // value=""
          checked={this.props.checked}
          onChange={this.toggleCheckbox}
        />
        <label
          htmlFor={label}
          ref={(c) => { this.label = c; }}
        >{label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  checkboxChange: PropTypes.func,
};

