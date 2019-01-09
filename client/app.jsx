import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Server from './Server';

const App = () => (
  <div>
    <Main />
  </div>
);

const server = document.getElementById('server');
const app = document.getElementById('app');
console.log(server, app);

if (server) {
  ReactDOM.hydrate(<Server />, app);
}

if (app) {
  ReactDOM.render(<App />, app);
}
