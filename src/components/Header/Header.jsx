import React from 'react';
import {Button} from 'reactstrap'
import headerLogo from "../../assets/pics/recruitask.png"

export default function Header(props) {
    return (
        <div id="jumbo">
            {/* <img id="imgHeader" src={headerImg} alt="no" /> */}
            <div className="row" >
                <div className="col">
                    <img id="imgHeader" src={headerLogo} alt="no" />
                </div>
                <div className="col">
                </div>
                <div className="col d-flex justify-content-end mr-4 mt-3">
                    <Button onClick={props.open}>Edit your profile</Button>
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