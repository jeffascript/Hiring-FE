import React from "react";
import usersImg from "../../assets/pics/users.png";
import msLogo from "../../assets/pics/msWhite.png";
import allLogo from "../../assets/pics/allianz.png";
import bmwLogo from "../../assets/pics/bmw.png";
import BlockButton from "../BlockButton/BlockButton";

export default () => {
  const text = "Read more";
  return (
    <div id="ratingPartnersWholeCont">
    <div id="ratingPartnersCont">
      <div id="rpItemOne">
        <div id="rpItemNone"></div>
        <div id="rpItemTwo">
          <div id="ratingBox">
            <div id="star">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_half</span>
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

        <div id="logoImgCol">
          <div id="logoFirstCol">
            <img id="allLogo" src={allLogo} alt="Allianz"></img>
          </div>
          <div id="logoSecondCol">
            <img id="msLogo" src={msLogo} alt="Microsoft Logo"></img>
          </div>
          <div id="logoThirdCol">
            <img id="bmwLogo" src={bmwLogo} alt="Allianz"></img>
          </div>
        </div>
      </div>

    </div>
    <div id="readMoreBtn">
        <BlockButton text={text} />
      </div>
    </div>
  );
};
