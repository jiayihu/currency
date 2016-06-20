import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Currency from '../features/currency/Currency';
import { ratesSelector } from '../reducers/rates';

import './normalize.css';
import styles from './styles.scss';

function App(props) {
  const isRatesAvailable = Object.keys(props.ratesByBase).length > 0;
  const { bases, basesOrder, currencies } = props.user;
  let currenciesList;

  if (isRatesAvailable) {
    currenciesList = basesOrder.map(baseId => {
      const baseName = bases[baseId].name;
      const rates = ratesSelector(props.ratesByBase[baseName], currencies);
      return (<Currency base={bases[baseId]} rates={rates} key={baseName} />);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isRatesAvailable ? currenciesList : 'Loading...'}
      </div>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    bases: PropTypes.object,
    basesOrder: PropTypes.array,
    currencies: PropTypes.array,
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
