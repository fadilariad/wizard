import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Switch} from 'react-router-dom'



function App() {
  return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="wizard-personal" component={}/>
            <Route exact path="/wizard-address" component={}/>
            <Route exact path="/wizard-profile" component={}/>
            <Route exact path="/wizard-summary" component={}/>
          </Switch>
        </React.Fragment>
      </Router
    <div>

    </div>
  );
}

export default App;