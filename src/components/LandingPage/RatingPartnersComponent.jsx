import React from "react";
import { Icon } from "evergreen-ui";
import usersImg from "../../assets/pics/users.png";
import TestBox from "../TestBox";

export default () => {
  // return (<TestBox />)
  return (
    <div id="ratingPartnersCont">
      <div id="rpItemOne">
        <div id="rpItemNone"></div>
        <div id="rpItemTwo">
          <div id="ratingBox">
            <div id="star">
              {/* <Icon className="starIcon" icon="star" />
              <Icon className="starIcon" icon="star" />
              <Icon className="starIcon" icon="star" />
              <Icon className="starIcon" icon="star" /> */}
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">
                star_half
              </span>
              {/* <Icon className="starIcon"  icon="star" /> */}
            </div>

            <div id="commentText">
              <b>4.7</b> customer satisfaction
            </div>
          </div>
          <div id="triangle"></div>
          <div id="usersImgCol">
            <img id="usersImg" src={usersImg} alt="users"></img>
          </div>
        </div>
      </div>

      <div id="rpItemThree">
        <div id="rpTitle">Lorem ipsum dolor sit amet</div>

        <div id="rpCaption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, aspernatur
          quod ab, sunt iusto nihil incidunt cum eligendi
        </div>
      </div>
    </div>
  );
};
