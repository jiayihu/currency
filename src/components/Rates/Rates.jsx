import React, { PropTypes } from 'react';
import { Rate } from '../';
import styles from './styles.scss';

export default function Rates({ baseValue, rates }) {
  const updatedRates = Object.keys(rates).reduce((prevObj, currKey) => {
    prevObj[currKey] = baseValue * rates[currKey]; // eslint-disable-line
    return prevObj;
  }, {});
  const ratesList = Object.keys(updatedRates).map((key) => (
    <Rate value={updatedRates[key]} currency={key} key={key} />
  ));

  return (
    <div className={styles.rates}>
      {ratesList}
    </div>
  );
}

Rates.propTypes = {
  baseValue: PropTypes.number.isRequired,
  rates: PropTypes.object.isRequired,
};
