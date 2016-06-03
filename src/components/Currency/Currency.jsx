import React, { PropTypes } from 'react';
import { Base } from '../../containers/';
import { Rates } from '../';
import styles from './styles.scss';

export default function Currency({ base, rates }) {
  return (
    <div className={styles.currency}>
      <Base id={base.id} name={base.name} value={base.value} />
      <Rates baseValue={base.value} rates={rates} />
    </div>
  );
}

Currency.propTypes = {
  base: PropTypes.object.isRequired,
  rates: PropTypes.object.isRequired,
};
