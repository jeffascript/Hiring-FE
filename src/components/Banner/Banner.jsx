import React, { useState } from "react";
import BlockButton from "../BlockButton/BlockButton";
import DisplayModal from "./DisplayModal";
import LoginIcon from "../../assets/icons/User.png";
import logo from "../../assets/pics/recruitask.png"
export default () => {
  let text = "Get Started";
  const [visibleModal, setVisibleModal] = useState(false);
  const changeVisibility = () => setVisibleModal(!visibleModal)
  return (
    <div id="jumbo">
      <div id="logoRow">
        <div id="logo">
          <img
            src={logo}
            alt="logo"
          ></img>
        </div>
        <div id="btnLoginRow">
          <img className="btnLogin" src={LoginIcon} onClick={changeVisibility} alt="no" />
          <a href="#" className="close" />
          {!!visibleModal && <DisplayModal show={visibleModal} SetVisibility={changeVisibility} />}
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