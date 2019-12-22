import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Personal from "./components/personal/personal";



function App() {
  return (
      <Router>
          <Personal/>
        {/*<React.Fragment>*/}
        {/*  <Switch>*/}
        {/*    <Route exact path="wizard-personal" component={Personal}/>*/}
        {/*    <Route exact path="/wizard-address" component={}/>*/}
        {/*    <Route exact path="/wizard-profile" component={}/>*/}
        {/*    <Route exact path="/wizard-summary" component={}/>*/}
        {/*  </Switch>*/}
        {/*</React.Fragment>*/}
      </Router>
  );
}

export default App;
