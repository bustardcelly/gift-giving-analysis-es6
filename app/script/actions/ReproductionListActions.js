'use strict';

import ajax from 'qwest'
import Dispatcher from '../dispatcher/Dispatcher'
import ReproductionActionEnum from '../enums/ReproductionAction'

var ReproductionListActions = {

  all: function() {
    ajax
      .get('http://54.86.176.185:8001/reproduction', null, {responseType:'json'})
      .then(function(response) {
        Dispatcher.handleAsyncAction({
          type: ReproductionActionEnum.GET_REPRODUCTIONS,
          list: typeof response === 'string' ? JSON.parse(response) : response
        });
      });
  }

};

export default ReproductionListActions
