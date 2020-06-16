import React, { Component } from 'react';
import { BrowserRouter as Router, Route,useParams} from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import TasksListPage from "../components/TasksListPage/TasksListPage";
import CallBackPage from "../components/CallBack/CallBack";
import WelcomePage from './LandingPage/Welcome';

class Main extends Component {
    constructor(props) {
        super(props);
    this.state = {  }
    }
    
    render() { 
        return ( 
        <Router>
            <Route path="/" exact component={LandingPage} />
            <Route path="/taskslist" exact component={TasksListPage} />
            <Route path="/register" exact component={CallBackPage}/>
            <Route path="/welcome" exact component={WelcomePage}/>
        </Router>
        );
    }
}
 
export default Main;