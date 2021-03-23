import React from 'react';

import MyContext from './context';

export default function OtherChild() {
  return (
    <MyContext.Consumer>
      {val => <div> {val} </div>}
    </MyContext.Consumer>
  );
}
