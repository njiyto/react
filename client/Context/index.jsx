import React, { Component } from 'react';
import Middle from './Middle';

import MyContext from './context';

export default class Context extends Component {
  render() {
    return (
      <MyContext.Provider value="dark">
        <Middle />
      </MyContext.Provider>
    );
  }
}
