import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Rate } from '../../components/';
import styles from './styles.scss';

function Rates(props) {
  const rates = Object.keys(props.rates).map((key) => (
    <Rate value={props.rates[key]} currency={key} key={key} />
  ));

  return (
    <div className={styles.rates}>
      {rates}
    </div>
  );
}

Rates.propTypes = {
  rates: PropTypes.object,
};

function mapStateToProps({ rates }) {
  return { rates };
}

export default connect(mapStateToProps)(Rates);
