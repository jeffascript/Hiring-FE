import React from "react";
import { Container, Row, Col, Image } from "reactstrap"
import BlockButton from "../BlockButton/BlockButton";

export default () => {
  let text = "Get Started";

  return (
    <Container fluid  id="jumbo">
      <Row id="logoRow">
        <div id="logo">
          <img
            src={require("../../assets/pics/recruitask.png")}
            alt="logo"
          ></img>
        </div>
      </Row>

    
        {/* <Row sm={12} id="motto">The first task-based hiring platform</Row>
        <Row id="mottoCaption">
          We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.
          </Row> */}

          <Container>
            <Row>
              <div className="col-12" id="motto">
              <Container>
                <span >The first task-based hiring platform</span>
              </Container>
              </div>
              <div className="col-12" id="mottoCaption">
              <Container>
                <p >We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.</p>
              </Container>
              </div>
            </Row>
          </Container>
     

        <Row className="appBtn">
        <BlockButton text={text} />
        </Row>
    </Container>
  );
};

