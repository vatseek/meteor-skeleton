import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Auth from './auth/authApp';

export default class App extends Component {
  render() {
    if (!Meteor.userId()) {
      return (
        <div>
          <Auth />
        </div>
      );
    }

    return (
      <div>
        <AccountsUIWrapper />
      </div>
    );
  }
}