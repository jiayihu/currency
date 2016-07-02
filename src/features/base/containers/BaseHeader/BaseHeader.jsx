import React, { PropTypes } from 'react';
import { EditableInput } from 'uikit';
import { connect } from 'react-redux';
import { userActions } from 'actions/';

import styles from './styles.scss';

class BaseHeader extends React.Component {
  constructor() {
    super();
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  format(value) {
    return Number(value).toFixed(2);
  }

  handleChangeValue(newValue) {
    this.props.updateBaseValue({
      baseId: this.props.id,
      newValue: Number(newValue),
    });
  }

  render() {
    // Not essential input type number properties
    const otherProperties = {
      min: '0',
    };

    return (
      <div className={styles.baseHeader}>
        <span>
          <span className={styles.symbol}>€</span>
          {' '}
          <span className={styles.value}>
            <EditableInput
              className={styles.baseInput}
              format={this.format}
              initialValue={this.props.value}
              onSave={this.handleChangeValue}
              type="number"
              others={otherProperties}
            />
          </span>
        </span>
        <span className={styles.currency}>{this.props.id}</span>
      </div>
    );
  }
}

BaseHeader.propTypes = {
  id: PropTypes.string.isRequired,
  updateBaseValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default connect(null, { updateBaseValue: userActions.updateBaseValue })(BaseHeader);
