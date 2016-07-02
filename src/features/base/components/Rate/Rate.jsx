import styles from './styles.scss';
import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DragIcon from 'material-ui/svg-icons/editor/drag-handle';

export default class Rate extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteRate(this.props.currency);
  }

  render() {
    return (
      <li className={styles.rate}>
        <span className={styles.amount}>
          <span className={styles.symbol}>$</span>
          {' '}
          <span className={styles.value}>{this.props.value.toFixed(4)}</span>
        </span>
        <span className={styles.currency}>{this.props.currency}</span>
        <span className={styles.icons}>
          <IconButton onClick={this.handleDelete} tooltip="Delete">
            <DeleteIcon color="#F9DFE2" />
          </IconButton>
          <IconButton tooltip="Drag to order">
            <DragIcon color="#F9DFE2" />
          </IconButton>
        </span>
      </li>
    );
  }
}

Rate.propTypes = {
  currency: PropTypes.string.isRequired,
  deleteRate: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
