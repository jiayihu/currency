import React from 'react';
import { Base, Rates } from '../containers/';

import './normalize.css';
import styles from './styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Base />
          <Rates />
        </div>
      </div>
    );
  }
}
