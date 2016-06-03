import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export default class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.initialValue,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange() {
    this.setState({
      value: this.input.value,
    });
  }

  handleClick() {
    this.setState({
      isEditing: true,
    });
  }

  handleSave() {
    this.props.onSave(this.input.value);
  }

  render() {
    let input;

    if (!this.state.isEditing) {
      input = (
        <input
          className={styles.input}
          value={this.state.value}
          onClick={this.handleClick}
          readOnly
        />
      );
    } else {
      input = (
        <input
          className={styles.input}
          ref={(c) => (this.input = c)}
          type="text"
          value={this.state.value}
          onBlur={this.handleSave}
          onChange={this.handleChange}
        />
      );
    }

    const className = classnames(styles.editableInput, this.props.className);

    return (
      <span className={className} style={this.props.style}>{input}</span>
    );
  }
}

EditableInput.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  style: PropTypes.object,
};
