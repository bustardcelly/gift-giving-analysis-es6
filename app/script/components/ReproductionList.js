/** @jsx React.DOM */
/** global window */
'use strict'

import React from 'react';
import ReproductionStore from '../stores/ReproductionStore';
import ReproductionListItem from './ReproductionListItem';

var ReproductionList = React.createClass({displayName: 'ReproductionList',
  _onChange: function() {
    this.setState({
      reproductions: ReproductionStore.all()
    });
  },
  getInitialState: function() {
    return {
      reproductions: ReproductionStore.all()
    }
  },
  componentDidMount: function() {
    ReproductionStore.addChangeListener(this._onChange);
    ReproductionStore.init();
  },
  componentWillUnmount: function() {
    ReproductionStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var rows = this.state.reproductions.map(function(item) {
      return <ReproductionListItem title={item.title} />
    });
    return (
      <div>
        <button>add</button>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
});

export default ReproductionList;
