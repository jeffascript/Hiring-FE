import React from "react";
import usersImg from "../../assets/pics/users.png";
import msLogo from "../../assets/pics/msWhite.png";
import allLogo from "../../assets/pics/allianz.png";
import bmwLogo from "../../assets/pics/bmw.png";
//import {Container, Row, Col} from "react-bootstrap"
import BlockButton from "../BlockButton/BlockButton";
import { Container, Row, Col } from "reactstrap";

export default () => { 
  const text = "Read more";

  return (
    <>

<Container fluid  id="ratingPartnersCont">
      <Row m-0 id="overlayRow">
      <Col id="rpItemOne" className="col-md-4 d-none d-sm-none d-md-block d-lg-block d-xl-block">
   
        <Col className="col-10" id="rpItemTwo">
          <Row id="ratingBox">
            <Col className="col-12" id="star">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_half</span>
            </Col>

            <Col className="col-12 captionTitle" >
              <b>4.7 </b>customer satisfaction
            </Col>
          </Row>
          <div id="triangle"></div>
          <Row id="usersImgCol">
            <img id="usersImg" src={usersImg} alt="users"></img>
          </Row>
        </Col>
      </Col>

      <Col id="rpItemThree" className="col-md-8" >
          <Container className="p-5">
            <Row>
          {/* <Col className="col-12 " id="rpTitle"> */}
          <Col className="col-12 headerTitle text-left" >
            
            <p>Lorem ipsum dolor sit amet</p></Col>
  
          {/* <Col className="col-12" id="rpCaption"> */}
          <Col className="col-12 captionTitle text-left">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit, aspernatur
            quod ab, sunt iusto nihil incidunt cum eligendi</p>
          </Col>
  
          <Row id="logoImgCol w-100">
            <div className="col-4" >
              <img id="allLogo" className="img-fluid" src={allLogo} alt="Allianz" />
            </div>
            <div className="col-4"  >
              <img id="msLogo" className="img-fluid" src={msLogo} alt="Microsoft Logo"></img>
            </div>
            <div className="col-4" >
              <img id="bmwLogo"className="img-fluid"  src={bmwLogo} alt="BMW"></img>
            </div>
          </Row>
          <Row className="appBtn mt-5" id="readMoreBtn">
          <BlockButton text={text} />
        </Row>
            </Row>
          </Container>
      </Col>
      </Row>
      
    </Container>

      </>


  );
};
