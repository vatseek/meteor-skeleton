import {connect, dispatch} from 'react-redux';
import {Accounts} from 'meteor/accounts-base';
import {browserHistory} from 'react-router'

import AuthComponent from '../components/authComponent';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  handleSuccess: function (googleUser) {
    console.log(googleUser);
    // const googleIdToken = googleUser.getAuthResponse().id_token;
    // Meteor.loginWithGoogle(googleIdToken, dispatch);
  },
  handleFailure: function() {

  }
});

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthComponent);

export default Auth;
