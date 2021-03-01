import React, { useState } from "react";
import FlightResultsItem from "./components/FlightResultsItem";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [apiData, setApiData] = useState(null);

  return (
    <Router>
        <Switch>
          <Route exact path="/"> <Home apiData={apiData} setApiData={setApiData} /></Route>
          <Route path="/:id"><FlightResultsItem apiData={apiData} /></Route>  
        </Switch>
    </Router>
  );
}

export default App;
