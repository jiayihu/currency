import styles from './styles.scss';
import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { Rate } from '../';
import { RATE } from '../Rate/Rate';

const ratesDrop = {
  hover(props) {
    console.log('hover drop %O', props);
  },
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Rates extends React.Component {
  render() {
    const { baseValue, deleteRate, moveRate, rates, connectDropTarget } = this.props;

    // Multiply rates values with base value
    const updatedRates = Object.keys(rates).reduce((prevObj, currKey) => {
      prevObj[currKey] = baseValue * rates[currKey]; // eslint-disable-line
      return prevObj;
    }, {});
    const ratesList = Object.keys(updatedRates).map((rateId) => (
      <Rate
        currency={rateId}
        deleteRate={deleteRate}
        moveRate={moveRate}
        key={rateId}
        id={rateId}
        value={updatedRates[rateId]}
      />
    ));

    return connectDropTarget(
      <div className={styles.rates}>
        {ratesList}
      </div>
    );
  }
}

Rates.propTypes = {
  baseValue: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  deleteRate: PropTypes.func.isRequired,
  moveRate: PropTypes.func.isRequired,
  rates: PropTypes.object.isRequired,
};

Rates.defaultProps = {
  connectDropTarget(a) { return a; },
};

export default (Rates);
