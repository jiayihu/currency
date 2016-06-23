import React, { PropTypes } from 'react';
import { EditableInput } from 'uikit';
import { connect } from 'react-redux';
import { baseActions } from 'actions/';

import styles from './styles.scss';

class BaseHeader extends React.Component {
  constructor() {
    super();
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleChangeValue(newValue) {
    this.props.updateBaseValue({
      baseId: this.props.id,
      newValue: Number(newValue),
    });
  }

  render() {
    return (
      <div className={styles.baseHeader}>
        <span>
          <span className={styles.symbol}>€</span>
          {' '}
          <span className={styles.value}>
            <EditableInput
              className={styles.baseInput}
              initialValue={this.props.value.toFixed(2)}
              onSave={this.handleChangeValue}
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

export default connect(null, { updateBaseValue: baseActions.updateBaseValue })(BaseHeader);
