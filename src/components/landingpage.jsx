import React, { Component } from 'react';
import backgroundImg from "../assets/pics/entrepreneur-working-on-his-macbook-2-picjumbo-com.jpg"

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cont">
            <div id="jumbo1"><img src={backgroundImg} alt="no" ></img></div>
            <div id="jumbo2"></div>
            </div>            
         );
    }
}
 
export default LandingPage;