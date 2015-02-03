'use strict';

import ajax from 'promjax';
import assert from 'assert';

import ReproductionListActions from '../../../app/script/actions/ReproductionListActions'

export default function step() {
  
  this.Given(/^I have (\d+) Reproductions in the DB$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I request All Action for Reproductions$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^The Dispatcher is notified of the Async Event$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

};
