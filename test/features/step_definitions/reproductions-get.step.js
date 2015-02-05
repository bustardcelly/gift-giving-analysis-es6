'use strict';

import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import Dispatcher from '../../../app/script/dispatcher/Dispatcher';
import ReproductionActionEnum from '../../../app/script/enums/ReproductionAction';
import ReproductionListActions from '../../../app/script/actions/ReproductionListActions';

var expect = chai.expect;
chai.use(sinonChai);

export default function step() {

  var xhr;
  var requests = [];
  var reproductions = [];
  var generateReproduction = function() {
    return {hello: 'world'};
  };
  
  this.Given(/^I have (\d+) Reproductions in the DB$/, function (count, callback) {
    var i;
    for(i = 0; i < count; i++) {
      reproductions.push(generateReproduction());
    }

    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    sinon.stub(Dispatcher, 'handleAsyncAction');

    callback();
  });

  this.When(/^I request All Action for Reproductions$/, function (callback) {
    ReproductionListActions.all();
    expect(requests.length).to.equal(1);
    requests[0].respond(200, {'Content-Type': 'application/json'}, JSON.stringify(reproductions));
    callback();
  });

  this.Then(/^The Dispatcher is notified of the Async Event$/, function (callback) {

    expect(Dispatcher.handleAsyncAction).to.have.been.calledOnce;
    expect(Dispatcher.handleAsyncAction).to.have.been.calledWith({
      type: ReproductionActionEnum.GET_REPRODUCTIONS,
      list: reproductions
    });
    Dispatcher.handleAsyncAction.restore();

    xhr.restore();
    callback();
  });

}
