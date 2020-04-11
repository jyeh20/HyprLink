import React, { Component } from "react";
import AllEventsPage from "./Components/allEventsPage";
import createEvents from "./Components/createEvents";
import IndividualEventsPage from "./Components/individualEventsPage";
import TopBar from "./Components/TopBar";
import ExtenderApp from "./Components/ExtenderApp";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      off_black: (opacity = 1) => `rgba(10, 13, 19, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      purple: (opacity = 1) => `rgba(48, 45, 76, ${opacity})`,

      topBarHeight: 48,
    };

    return (
      <Router>
        <TopBar styles={styles} />
        <div className="App">
          <Route path="/events" exact component={AllEventsPage} />
          <Route path="/hyprlink" exact component={createEvents} />
          {/*DONT CHANGE, WORKS FOR LOCAL AND GITHUB*/}
          {/* <Route path="/newEvent" component={createEvents} /> */}
          <Route path="/event/:id" component={IndividualEventsPage} />
          {/* /events/:id
          DONT CHANGE, WORKS FOR LOCAL AND GITHUB*/}
        </div>
      </Router>
    );
  }
}

export default App;
