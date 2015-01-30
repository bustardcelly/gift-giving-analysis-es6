'use strict';

import assign from 'object-assign';
import Dispatcher from 'flux-react-dispatcher';

export default assign(new Dispatcher(), {
  
  handleAsyncAction: function(action) {
    this.dispatch({
      source: 'ASYNC_ACTION',
      action: action
    });
  }

});
