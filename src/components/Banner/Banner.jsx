import React from "react";
import BlockButton from "../BlockButton/BlockButton";

export default () => {
  let text = "Get Started";

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
          We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.
        </div>

        <BlockButton text={text} />
      </div>
    </div>
  );
};

