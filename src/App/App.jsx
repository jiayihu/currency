import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Base from '../features/base/Base';
import { basesSelector } from '../reducers/';

import 'react-select/dist/react-select.css';
import './normalize.css';
import styles from './styles.scss';

function App(props) {
  const basesList = props.bases.map(base => (
    <Base baseId={base.id} rates={base.rates} baseValue={base.value} key={base.id} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {basesList}
      </div>
    </div>
  );
}

App.propTypes = {
  bases: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    bases: basesSelector(state),
  };
}

export default connect(mapStateToProps)(App);
