import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export default class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.format(this.props.initialValue),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange() {
    this.setState({
      value: this.props.format(this.input.value),
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
          type={this.props.type}
          value={this.state.value}
          onBlur={this.handleSave}
          onChange={this.handleChange}
          {...this.props.others}
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
  format: PropTypes.func.isRequired,
  initialValue: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  others: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};

EditableInput.defaultProps = {
  format(value) { return value; },
  others: {},
  type: 'text',
};
