import styles from './styles.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { showAddRate } from '../../ui-actions/';

class AddRateBtn extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showAddRate();
  }

  render() {
    return (
      <RaisedButton
        className={styles.addRateBtn}
        icon={<ContentAdd />}
        label="Label before"
        labelPosition="before"
        label="Add rate"
        onClick={this.handleClick}
        primary
      />
    );
  }
}

AddRateBtn.propTypes = {
  showAddRate: PropTypes.func.isRequired,
};

export default connect(null, { showAddRate })(AddRateBtn);
