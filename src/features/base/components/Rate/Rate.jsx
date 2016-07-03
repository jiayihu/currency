import styles from './styles.scss';
import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DragIcon from 'material-ui/svg-icons/editor/drag-handle';

export const RATE = 'RATE';

const rateSource = {
  beginDrag(props) {
    console.log('beginDrag props %O', props);
    return {
      rateId: props.id,
    };
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('endDrag item %O and dropResult %O', item, dropResult);
  },
};

const rateDrop = {
  hover(props, monitor) {
    const startRateId = monitor.getItem().rateId;
    const endRateId = props.id;

    if (startRateId !== endRateId) {
      console.log('hover drop with props %O and item %O', props, monitor.getItem());
      props.moveRate(startRateId, endRateId);
    }
  },
};

function collectDrag(connect, monitor) {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function collectDrop(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Rate extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteRate(this.props.currency);
  }

  render() {
    const { isDragging, connectDragPreview, connectDragSource, connectDropTarget } = this.props;
    const inlineStyles = {
      opacity: isDragging ? '.2' : 1,
    };

    return connectDropTarget(connectDragPreview(
      <li className={styles.rate} style={inlineStyles}>
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
          {connectDragSource(
            <span>
              <IconButton tooltip="Drag to order">
                <DragIcon color="#F9DFE2" />
              </IconButton>
            </span>
          )}
        </span>
      </li>
    ));
  }
}

Rate.propTypes = {
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  deleteRate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  moveRate: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default DropTarget(RATE, rateDrop, collectDrop)(
  DragSource(RATE, rateSource, collectDrag)(Rate)
);
