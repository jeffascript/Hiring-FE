import React from "react";
import Banner from "../Banner/Banner";
import GoalsComponent from "./GoalsComponent";
import RatingPartnersComponent from './RatingPartnersComponent';
import Accordian from './FAQsComponent'

export default () => {
    return (
      <div className="cont">
        <Banner />
        <GoalsComponent />
        <RatingPartnersComponent />
        <Accordian />
        
      </div>
    );
}

