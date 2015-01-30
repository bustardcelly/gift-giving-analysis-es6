'use strict';

import assign from 'object-assign';
import EventEmitter from 'eventemitter3';

import Dispatcher from '../dispatcher/Dispatcher';
import ReproductionEventEnum from '../enums/ReproductionEvent';
import ReproductionActionEnum from '../enums/ReproductionAction';
import ReproductionListActions from '../actions/ReproductionListActions';

var reproductions = [];

var ReproductionStore = assign({}, EventEmitter.prototype, {

  init: function() {
    ReproductionListActions.all();
  },
  all: function() {
    return reproductions;
  },
  add: function(item) {
    
  },
  addChangeListener: function(callback) {
    this.on(ReproductionEventEnum.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeEventListener(ReproductionEventEnum.CHANGE_EVENT, callback);
  }

});

Dispatcher.register(ReproductionStore, function(payload) {

  var action = payload.action;
  switch(action.type) {
    case ReproductionActionEnum.GET_REPRODUCTIONS:
      reproductions = action.list;
      ReproductionStore.emit(ReproductionEventEnum.CHANGE_EVENT);
      break;
    case ReproductionActionEnum.ADD_REPRODUCTION:
      reproductions.push(action.item)
      ReproductionStore.emit(ReproductionEventEnum.CHANGE_EVENT);
      break;
  }

});

export default ReproductionStore;
