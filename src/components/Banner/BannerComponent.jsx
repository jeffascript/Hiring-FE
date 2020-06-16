import React, { useState } from "react";
import BlockButton from "../BlockButton/BlockButton";
import DisplayModal from "./DisplayModal";
import LoginIcon from "../../assets/icons/User.png"; 
import TasksFilter from"../TasksListPage/TasksFilter";

export default (props) => {
  let text = "Get Started";
  
  const [state, setstate] = useState(false);

  console.log(window)
  return (
<>
      {props.url=== window.location.pathname ?
        <div  className={"jumbo" + " " + props.bannerClass} >
      <div className="logoRow">
      <div  className="logo">
        <img
          src={require("../../assets/pics/recruitask.png")}
          alt="logo"
        ></img>
      </div>
      <div  className="btnLoginRow">
        <img  src={LoginIcon} onClick={()=>setstate(true)} alt="no" />
        <a href="#" className="close"/>
          {props.modalClass==="displaymodal" ? <DisplayModal show={state} /> : null
          //or dropdown profil menu if props.modalClass==="dropdown"
          }
      </div>
    </div>

    <div  className={"mottoRow" + " " + props.bannerClass}>
        <div className={"motto" + " " + props.bannerClass}>{props.title}</div>
        { props.bannerClass === "landingpage" ? <div className="mottoCaption">
        We propose real anonymized tasks of companies from all over the world.
        Train yourself, nail the challenge and get hired.
        <BlockButton text={text} /></div> :  null
        // <TasksFilter/>
        }
    </div> 
    </div>
     : null }
     </>
      
  );
};

