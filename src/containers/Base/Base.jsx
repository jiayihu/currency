import React from 'react';

import styles from './styles.scss';

export default function Base() {
  return (
    <div className={styles.base}>
      <span>
        <span className={styles.symbol}>€</span>
        {' '}
        <span className={styles.value}>1.00</span>
      </span>
      <span className={styles.currency}>EUR</span>
    </div>
  );
}
