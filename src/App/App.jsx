import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Currency } from '../components/';

import './normalize.css';
import styles from './styles.scss';

function App(props) {
  const isRatesAvailable = Object.keys(props.ratesByBase).length > 0;
  let currencies;

  if (isRatesAvailable) {
    currencies = props.bases.map(base => (
      <Currency base={base} rates={props.ratesByBase[base.id]} key={base.id} />
    ));
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isRatesAvailable ? currencies : 'Loading...'}
      </div>
    </div>
  );
}

App.propTypes = {
  bases: PropTypes.array.isRequired,
  ratesByBase: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    bases: state.user.bases,
    ratesByBase: state.rates,
  };
}

export default connect(mapStateToProps)(App);
