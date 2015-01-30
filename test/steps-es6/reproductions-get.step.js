'use strict';
// output needs to be:
// "pretest": "./node_modules/.bin/traceur --dir test/steps-es6 test/features/step_definitions --modules=commonjs",
/**

Object.defineProperty(module, 'exports', {
  value: $__default;
});
*/

export function step() {
  
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
