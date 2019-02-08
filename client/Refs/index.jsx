import React, { Component } from 'react';
import Child from './Child';
import SecondChild from './SecondChild';

const myRefS = React.createRef();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.onClick();
    myRefS.current.value = 'fdsf';
  }

  render() {
    return (
      <>
        <Child ref={this.myRef} />
        <SecondChild ref={myRefS} />
      </>
    );
  }
}
