import React, { Component } from "react";
import Banner from './Banner/Banner'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cont">
        <Banner/>
        <div id="appGoals">
          <div id="goalTitle">Lorem ipsum dolor sit amet.</div>
          <div id="goalCaption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis eaque doloribus suscipit pariatur fugit sapiente
            nesciunt quisquam est necessitatibus.
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
