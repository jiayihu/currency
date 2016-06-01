import React, { PropTypes } from 'react';

import styles from './styles.scss';

export default function Base(props) {
  return (
    <div className={styles.base}>
      <span>
        <span className={styles.symbol}>€</span>
        {' '}
        <span className={styles.value}>{props.value.toFixed(2)}</span>
      </span>
      <span className={styles.currency}>{props.id}</span>
    </div>
  );
}

Base.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
