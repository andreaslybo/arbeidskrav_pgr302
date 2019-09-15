import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Navigation } from './Shared/Navigation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" component={ Home } />
          <Route component={ Home } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
