import React, { Component } from "react";
import Banner from "../Banner/Banner";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cont">
        <Banner />
        <div id="appGoals">
          <div id="goalTitle">Lorem ipsum dolor sit amet</div>
          <div id="goalCaption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, aspernatur
            quod ab, sunt iusto nihil incidunt cum eligendi
          </div>
          <div id="goalDepiction">
            <div className="depictionCols">
            <img
              className="depictionImg"
              src={require("../../assets/pics/filter.png")}
              alt="filter requirements"
            ></img>
            <div className="depictionText">Necessitatibus esse recusandae itaque assumenda</div>
            </div>
            
            <div className="depictionCols">
            <img
              className="depictionImg"
              src={require("../../assets/pics/network.png")}
              alt="networking"
            ></img>
            <div className="depictionText">Lorem ipsum dolor sit amet</div>
            </div>

            <div className="depictionCols">
            <img
              className="depictionImg"
              src={require("../../assets/pics/handshake.png")}
              alt="partners"
            ></img>
            <div className="depictionText">Ipsum aperiam quisquam odit temporibus</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
