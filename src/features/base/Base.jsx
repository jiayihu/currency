import React, { PropTypes } from 'react';
import { AddRate, BaseHeader } from './containers/';
import { Rates } from './components/';
import styles from './styles.scss';

export default function Base({ baseId, rates, baseValue }) {
  return (
    <div className={styles.base}>
      <BaseHeader id={baseId} name={baseId} value={baseValue} />
      <Rates baseValue={baseValue} rates={rates} />
      <AddRate />
    </div>
  );
}

Base.propTypes = {
  baseId: PropTypes.string.isRequired,
  rates: PropTypes.object.isRequired,
  baseValue: PropTypes.number.isRequired,
};
