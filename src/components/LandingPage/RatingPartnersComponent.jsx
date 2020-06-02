import React from "react";
import { Icon } from "evergreen-ui";

export default () => {
  return (
    <div id="ratingPartnersCont">
      <div className="rpItem" id="rpItemOne">
        <div id="usersImgCol">
          <img
            id="usersImg"
            src={require("../../assets/pics/users.png")}
            alt="users"
          ></img>
        </div>
      </div>
      <div className="rpItem" id="rpItemTwo">
        <div id="star">
          <Icon className="starIcon" icon="star" />
          <Icon className="starIcon" icon="star" />
          <Icon className="starIcon" icon="star" />
          <Icon className="starIcon" icon="star" />
          <Icon className="starIcon" id="lastStar" icon="star" />
        </div>
        <div id="ratingComment">
         <b>4.7</b>  customer satisfaction
        </div>
      </div>
      <div className="rpItem" id="rpItemThree"></div>
    </div>
  );
};
