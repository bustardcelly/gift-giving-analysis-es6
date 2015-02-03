"use strict";
Object.defineProperty(module, 'exports', {value: step});
var $__promjax__,
    $__assert__;
'use strict';
var ajax = ($__promjax__ = require("promjax"), $__promjax__ && $__promjax__.__esModule && $__promjax__ || {default: $__promjax__}).default;
var assert = ($__assert__ = require("assert"), $__assert__ && $__assert__.__esModule && $__assert__ || {default: $__assert__}).default;
function step() {
  console.log('this: ' + this);
  this.Given(/^I have (\d+) Reproductions in the DB$/, function(arg1, callback) {
    assert(false);
    callback.pending();
  });
  this.When(/^I request All Action for Reproductions$/, function(callback) {
    callback.pending();
  });
  this.Then(/^The Dispatcher is notified of the Async Event$/, function(callback) {
    callback.pending();
  });
}
var $__default = step;
;
