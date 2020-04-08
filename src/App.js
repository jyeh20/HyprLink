import React from "react";
import AllEventsPage from "./Components/allEventsPage";
import createEvents from "./Components/createEvents";
import IndividualEvents from "./Components/individualEventsPage";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/hyprlink/events" exact component={AllEventsPage} />
        <Route path="/hyprlink/" exact component={createEvents} />
        {/* <Route path="/newEvent" component={createEvents} /> */}
        <Route path="/event/:id" component={IndividualEvents} />
      </div>
    </Router>
  );
}

export default App;
