import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import CallBackPage from "../components/CallBack/CallBack";
import WelcomePage from './LandingPage/Welcome';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
        <Router>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" exact component={CallBackPage}/>
            <Route path="/welcome" exact component={WelcomePage}/>
        </Router>
        );
    }
}
 
export default Main;