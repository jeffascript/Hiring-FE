import React from "react";
import BlockButton from "../BlockButton/BlockButton";

export default () => {
    let text = "Start  >";
    
  return (
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
        <div className="depictionText">
          Necessitatibus esse recusandae itaque assumenda
        </div>
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
        <div className="depictionText">
          Ipsum aperiam quisquam odit temporibus
        </div>
      </div>
    </div>

    <div id="appGoalsBtn">
     <BlockButton text={text} />
    </div>
  </div>
  );
};