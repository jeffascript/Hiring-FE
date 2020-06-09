import React from "react";
import usersImg from "../../assets/pics/users.png";
import msLogo from "../../assets/pics/msWhite.png";
import allLogo from "../../assets/pics/allianz.png";
import bmwLogo from "../../assets/pics/bmw.png";
import {Container, Row, Col} from "react-bootstrap"
import BlockButton from "../BlockButton/BlockButton";

export default () => {
  const text = "Read more";

  return (
    <>
    <Container fluid  id="ratingPartnersCont">
      <Row m-0 id="overlayRow">
      <Col id="rpItemOne" className="col-sm-4">
   
        <Col className="col-10" id="rpItemTwo">
          <Row id="ratingBox">
            <Col className="col-12" id="star">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_half</span>
            </Col>

            <Col className="col-12" id="commentText">
              <b>4.7 </b>customer satisfaction
            </Col>
          </Row>
          <div id="triangle"></div>
          <Row id="usersImgCol">
            <img id="usersImg" src={usersImg} alt="users"></img>
          </Row>
        </Col>
      </Col>

      <Col id="rpItemThree" className="col-12 col-sm-8" >
        <Row>
        <Col className="col-12" id="rpTitle"><p>Lorem ipsum dolor sit amet</p></Col>

        <Col className="col-12" id="rpCaption">
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit, aspernatur
          quod ab, sunt iusto nihil incidunt cum eligendi</p>
        </Col>

        <Row id="logoImgCol">
          <Col className="col-xs-12" md={4} className="logoCols">
            <img id="allLogo" src={allLogo} alt="Allianz"></img>
          </Col>
          <Col className="col-xs-12" md={4}  className="logoCols">
            <img id="msLogo" src={msLogo} alt="Microsoft Logo"></img>
          </Col>
          <Col className="col-xs-12" md={4} className="logoCols">
            <img id="bmwLogo" src={bmwLogo} alt="BMW"></img>
          </Col>
        </Row>
        </Row>
      </Col>
      </Row>
      <Row className="appBtn" id="readMoreBtn">
        <BlockButton text={text} />
      </Row>
    </Container>

      </>
    // </Container>
  );
};
