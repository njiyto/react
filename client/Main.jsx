import React, { Component } from 'react';
import OldLifeCycle from './OldLifeCycle';

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
        {this.state.showOld
          && <OldLifeCycle
              killOld={this.killOld}
              changeProps={this.changeProps}
              someProps={this.state.someProps}
            />
        }
      </div>
    );
  }
}
