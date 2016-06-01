import React, { PropTypes } from 'react';
import { Base, Rates } from '../';
import styles from './styles.scss';

export default function Currency({ base, rates }) {
  return (
    <div className={styles.currency}>
      <Base id={base.id} value={base.value} />
      <Rates baseValue={base.value} rates={rates} />
    </div>
  );
}

Currency.propTypes = {
  base: PropTypes.object.isRequired,
  rates: PropTypes.object.isRequired,
};
