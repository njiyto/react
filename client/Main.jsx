import React, { Component } from 'react';
import OldLifeCycle from './OldLifeCycle';
import NewLifeCycle from './NewLifeCycle';
import Hooks from './Hooks';
import Lazy from './Lazy';
import Context from './Context';
import Refs from './Refs';

export default class Main extends Component {
  state = {
    showOld: true,
    someProps: '',
  }

  killOld = () => {
    console.log('---------------------------------------------------------');
    this.setState({ showOld: false });
  }

  changeProps = () => {
    console.log('---------------------------------------------------------');
    this.setState({ someProps: 'someProps changed' });
  }

  render() {
    return (
      <div> 
        {false
          && <OldLifeCycle
              killOld={this.killOld}
              changeProps={this.changeProps}
              someProps={this.state.someProps}
            />
        }
        {false// this.state.showOld
          && <NewLifeCycle
              killOld={this.killOld}
              changeProps={this.changeProps}
              someProps={this.state.someProps}
            />
        }
        <Hooks />
        <Lazy />
        <Context />
        <Refs />
      </div>
    );
  }
}
