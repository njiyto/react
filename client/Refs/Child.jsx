import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onClick = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text"/>
        <button onClick={this.onClick}>button</button>
      </div>
    );
  }
}
