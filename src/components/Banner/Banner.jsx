import React, { useState } from "react";
import BlockButton from "../BlockButton/BlockButton";
import DisplayModal from "./DisplayModal";
import LoginIcon from "../../assets/icons/User.png"; 
export default () => {
  let text = "Get Started";
  const [state, setstate] = useState(false);
 

  return (
    <div id="jumbo">
      <div id="logoRow">
        <div id="logo">
          <img
            src={require("../../assets/pics/recruitask.png")}
            alt="logo"
          ></img>
        </div>
        <div id="btnLoginRow">
          <img className="btnLogin" src={LoginIcon} onClick={()=>setstate(true)} alt="no" />
          <a href="#" className="close"/>
            {state===true ? <DisplayModal show={state} /> : null }
        </div>
      </div>

      <div id="mottoRow">
        <div id="motto">HIHIHIThe first task-based hiring platform</div>
        <div id="motto">HIHIHIThe first task-based hiring platform</div>
        <div id="mottoCaption">
          We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.
        </div>

        <BlockButton text={text} />
      </div>
    </div>
  );
};

