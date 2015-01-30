"use strict";
'use strict';
Object.defineProperty(module, 'exports', {value: step});
function step() {
  this.Given(/^I have (\d+) Reproductions in the DB$/, function(arg1, callback) {
    callback.pending();
  });
  this.When(/^I request All Action for Reproductions$/, function(callback) {
    callback.pending();
  });
  this.Then(/^The Dispatcher is notified of the Async Event$/, function(callback) {
    callback.pending();
  });
}
;
