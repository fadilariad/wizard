import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Personal from "./components/personal/personal";
import AddressDetails from "./components/adress/adress";
import Profile from "./components/profile/profile";
import Summary from "./components/summary/summary";
import StartWizard from "./components/new-wizard/new-wizard";


function App() {
  return (
    <div className={"body"}>
      <Router>
        <React.Fragment>
          <Switch>
            <Route  path="/wizard-personal" component={Personal}/>
            <Route  path="/wizard-address" component={AddressDetails}/>
            <Route  path="/wizard-profile" component={Profile}/>
            <Route  path="/wizard-summary" component={Summary}/>
            <Route  path="/" component={StartWizard}/>
          </Switch>
        </React.Fragment>
      </Router>
      </div>
  );
}

export default App;