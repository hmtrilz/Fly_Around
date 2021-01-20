import React from "react";
import FlightResultsItem from "./components/FlightResultsItem";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moreinfo" component={FlightResultsItem} />  
        </Switch>
    </Router>
  );
}

export default App;
