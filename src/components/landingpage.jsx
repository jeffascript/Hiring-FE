import React, { Component } from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cont">
        <div id="jumbo">
          <div id="logoRow">
            <div id="logo">
              <img
                src={require("../assets/pics/recruitask.png")}
                alt="logo"
              ></img>
            </div>
          </div>
          <div id="mottoRow">
            <div id="motto">The first task-based hiring platform</div>
            <div id="mottoCaption">We propose real anonymized tasks of companies from all over the world. Train yourself, nail the challenge and get hired.</div>
          </div>
        </div>
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
