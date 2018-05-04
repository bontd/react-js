import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Metrics } from 'styles/settings/';
import {Actions} from 'react-native-router-flux';
import styles from './styles/AddMoreCoinButtonStyle';

class AddMoreCoinButton extends Component {

  _onPress = async () => {
    const {
      payment_purpose,
      to_nick_name,
    } = this.props;
    Actions.Payment({
      package_type: 0,
      extraInfo: { paymentPurpose: payment_purpose, to_nick_name },
      paymentFrom: this.props.paymentFrom
    });
    if (this.props.callBack) {
      this.props.callBack();
    }
  }

  handleUpgrade = async () => {
    const {
      payment_purpose,
      to_nick_name,
    } = this.props;
    Actions.Payment({
      package_type: 1,
      extraInfo: { paymentPurpose: payment_purpose, to_nick_name },
      paymentFrom: this.props.paymentFrom
    });
    if (this.props.callBack) {
      this.props.callBack();
    }
  }

  render() {
    const { show_upgrade_link } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={this._onPress}
        >
          <View style={styles.btnWrapper}>
            <View style={styles.btnContent}>
              <Text style={styles.btnText}>Nạp thêm xu</Text>
            </View>
          </View>
        </TouchableOpacity>
        {show_upgrade_link &&
          <TouchableOpacity
            style={{marginTop: Metrics.metrics.baseMargin}}
            onPress={this.handleUpgrade}
          >
            <Text>Hoặc <Text style={styles.txtLink}>Nâng cấp tài khoản</Text></Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

AddMoreCoinButton.propTypes = {
  // payment_purpose: PropTypes.string.isRequired,
  show_upgrade_link: PropTypes.bool,
  to_nick_name: PropTypes.string,
  add_coin_success: PropTypes.func,
  callBack: PropTypes.func,
  paymentFrom: PropTypes.string
};

AddMoreCoinButton.defaultProps = {
  show_upgrade_link: true
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = () => {
  return {
  };
};

const AddMoreCoinButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMoreCoinButton);

export { AddMoreCoinButtonContainer as AddMoreCoinButton };