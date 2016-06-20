import React, { PropTypes } from 'react';
import { EditableInput } from 'uikit';
import { connect } from 'react-redux';
import { updateBaseValue } from 'actions';

import styles from './styles.scss';

class Base extends React.Component {
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
      <div className={styles.base}>
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
        <span className={styles.currency}>{this.props.name}</span>
      </div>
    );
  }
}

Base.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  updateBaseValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default connect(null, { updateBaseValue })(Base);
