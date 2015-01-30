'use strict';

import ajax from 'promjax'
import Dispatcher from '../dispatcher/Dispatcher'
import ReproductionActionEnum from '../enums/ReproductionAction'

var ReproductionListActions = {

  all: function() {
    ajax({
      url: 'http://54.86.176.185:8001/reproduction',
      reponseType: 'json'
    })
    .then(function(response, request) {
      Dispatcher.handleAsyncAction({
        type: ReproductionActionEnum.GET_REPRODUCTIONS,
        list: JSON.parse(response)
      });
    });
  }

};

export default ReproductionListActions
