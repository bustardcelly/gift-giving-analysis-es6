'use strict';

import React from 'react';

var ReproductionListItem = React.createClass({displayName: 'ReproductionListItem',

  onClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('select');
  },

  render: function() {
    return (
      <li><a href="#" onClick={this.onClick}>{this.props.title}</a></li>
    );
  }

});

export default ReproductionListItem;
