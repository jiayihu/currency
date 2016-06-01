import React, { PropTypes } from 'react';
import styles from './styles.scss';

export default function Rate(props) {
  return (
    <li className={styles.rate}>
      <span className={styles.amount}>
        <span className={styles.symbol}>$</span>
        {' '}
        <span className={styles.value}>{props.value.toFixed(4)}</span>
      </span>
      <span className={styles.currency}>{props.currency}</span>
    </li>
  );
}

Rate.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
