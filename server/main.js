import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.registerLoginHandler(function(loginRequest) {
    console.log('login');
});


Meteor.startup(() => {
  // code to run on server at startup
});
