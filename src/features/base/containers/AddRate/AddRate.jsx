import styles from './styles.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ratesActions } from 'actions';
import { hideAddRate } from '../../ui-actions/';
import { notUserRatesSelector } from 'reducers';
import { uiAddRateSelector } from '../../ui-reducers/';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Select from 'react-select';

class AddRate extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const selected = this.state.selected || '';
    this.props.addUserRate(selected.split(','));
    this.props.hideAddRate();
  }

  handleChange(newValue) {
    this.setState({
      selected: newValue,
    });
  }

  render() {
    if (!this.props.isOpen) return null;

    const selectOptions = this.props.rates.map(rateId => ({
      label: rateId,
      value: rateId,
    }));

    return (
      <div className={styles.addRate}>
        <div className={styles.content}>
          <Select
            className={styles.select}
            multi
            onChange={this.handleChange}
            options={selectOptions}
            placeholder="Select the currencies"
            simpleValue
            value={this.state.selected}
          />
          <FloatingActionButton onClick={this.handleClick} >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

AddRate.propTypes = {
  addUserRate: PropTypes.func.isRequired,
  hideAddRate: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  rates: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const ui = uiAddRateSelector(state);
  return {
    isOpen: ui.isOpen,
    rates: notUserRatesSelector(state),
  };
}

const boundActions = {
  addUserRate: ratesActions.addUserRate,
  hideAddRate,
};

export default connect(mapStateToProps, boundActions)(AddRate);
