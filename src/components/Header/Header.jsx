import React from 'react';
import { Link } from "react-router-dom";
import headerLogo from "../../assets/pics/recruitask.png"

export default function Header(props) {

    return (
        <div id="jumbo">
            {/* <img id="imgHeader" src={headerImg} alt="no" /> */}
            <div className="row" >
                <div className="col">
                    <Link to="/"><img id="imgHeader" src={headerLogo} alt="no" /></Link>
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row" >
                <div className="col displayText">
                   Hi {props.userName}, <br/>
                   Here are your tasks.
                </div>               
            </div>
        </div>
    );
}