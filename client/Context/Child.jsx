import React, { Component } from 'react';

import MyContext from './context';

export default class Child extends Component {
  static contextType = MyContext;

  render() {
    return <div>{this.context}</div>;
  }
}
