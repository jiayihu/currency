import React from 'react';
import styles from './styles.scss';

export default function Rate() {
  return (
    <li className={styles.rate}>
      <span>
        <span className={styles.symbol}>$</span>
        {' '}
        <span className={styles.value}>1.00</span>
      </span>
      <span className={styles.currency}>USD</span>
    </li>
  );
}
