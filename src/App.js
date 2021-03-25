import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from 'routes';

const App = () => (
  <div className="App">
  <Router>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
    <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
