import styles from './styles.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AddRate, AddRateBtn, BaseHeader } from './containers/';
import { Rates } from './components/';
import { userActions } from 'actions';

function Base({ baseId, baseValue, rates, deleteRate }) {
  return (
    <div className={styles.base}>
      <BaseHeader id={baseId} name={baseId} value={baseValue} />
      <Rates baseValue={baseValue} rates={rates} deleteRate={deleteRate} />
      <AddRateBtn />
      <AddRate />
    </div>
  );
}

Base.propTypes = {
  baseId: PropTypes.string.isRequired,
  deleteRate: PropTypes.func.isRequired,
  rates: PropTypes.object.isRequired,
  baseValue: PropTypes.number.isRequired,
};

export default connect(null, userActions)(Base);
