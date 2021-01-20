import React from "react";
import FlightResultsItem from "./components/FlightResultsItem";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/moreinfo" component={FlightResultsItem} />  
      </Switch>
      </div>
    </Router>
  );
}

export default App;
