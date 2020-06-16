import React  from "react";
import BannerComponent from "./BannerComponent";

export default () => {

let titleLandingPage = "The first task-based hiring platform";
let titleTasksList = "Find your perfect task and earn money.";

  return (
    <>
     <BannerComponent title={titleLandingPage} bannerClass="landingpage" modalClass="displaymodal" url="/"/>
     <BannerComponent title={titleTasksList} bannerClass="taskslist" modalClass="dropdown" url="/taskslist"/>
    </>
  );
};

