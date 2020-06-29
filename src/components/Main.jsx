import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";

class Main extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path="/" exact component={LandingPage} />
      </Router>
    );
  }
}

export default Main;
