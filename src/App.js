import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import Home from './components/Home'
import SignIn from './components/SignIn'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
