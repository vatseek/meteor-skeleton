import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  // ServiceConfiguration.configurations.upsert(
  //   {service: 'google'},
  //   {
  //     $set: {
  //       clientId: '138766123533-85feg87gsjrtf649dg99eh04l3hftqf1.apps.googleusercontent.com',
  //       secret: 'JBrLYSAkcBRDNwrlxzm_Z2Uz'
  //     }
  //   }
  // );
});


import {Provider} from 'react-redux';
import AppLayout from '../ui/App.jsx';
import store from '../store';

document.addEventListener("DOMContentLoaded", () => {
  render((
    <AppContainer />
  ), document.getElementById('root'));
});

const App = ({user}) => {
  let app = null;
  const pages = [];

  if (user && user.roles) {
    const filteredPages = pages.filter((page) => Roles.userIsInRole(user, page));
    app = (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
  } else {
    app = (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
  }

  return app;
};

const AppContainer = createContainer(({params}) => {
  return {
    user: Meteor.user(),
  };
}, App);
