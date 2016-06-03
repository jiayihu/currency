import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Currency } from '../components/';

import './normalize.css';
import styles from './styles.scss';

function App(props) {
  const isRatesAvailable = Object.keys(props.ratesByBase).length > 0;
  const { bases, basesOrder } = props.user;
  let currencies;

  if (isRatesAvailable) {
    currencies = basesOrder.map(baseId => (
      <Currency base={bases[baseId]} rates={props.ratesByBase[bases[baseId].name]} key={bases[baseId].name} />
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
  user: PropTypes.shape({
    bases: PropTypes.object,
    basesOrder: PropTypes.array,
  }).isRequired,
  ratesByBase: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    ratesByBase: state.rates,
  };
}

export default connect(mapStateToProps)(App);
