import React from 'react';
import { Rate } from '../../components/';
import styles from './styles.scss';

export default function Rates() {
  return (
    <div className={styles.rates}>
      <Rate />
      <Rate />
      <Rate />
      <Rate />
      <Rate />
    </div>
  );
}
