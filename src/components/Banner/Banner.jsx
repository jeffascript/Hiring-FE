import React, { Component } from "react";
import { Button } from "antd";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
  
      <div id="jumbo">
      <div id="logoRow">
        <div id="logo">
          <img
            src={require("../../assets/pics/recruitask.png")}
            alt="logo"
          ></img>
        </div>
      </div>
      <div id="mottoRow">
        <div id="motto">The first task-based hiring platform</div>
        <div id="mottoCaption">
          We propose real anonymized tasks of companies from all over the
          world. Train yourself, nail the challenge and get hired.
        </div>
        <div className="site-button-ghost-wrapper">
          <Button ghost>
          Get Started
          </Button>
        </div>
      </div>
    </div>
        
    );
  }
}

export default Banner;
