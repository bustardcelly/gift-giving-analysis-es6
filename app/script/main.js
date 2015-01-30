/** @jsx React.DOM */
/** global window */
'use strict'

import React from 'react';
import ReproductionList from './components/ReproductionList';

React.render(
  <ReproductionList title="hello" />,
  window.document.getElementById('main'));

export default {};
