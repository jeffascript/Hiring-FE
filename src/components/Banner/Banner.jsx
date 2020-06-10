import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap"
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

      {/* <Row id="mottoRow"> */}
        <Row sm={12} id="motto">The first task-based hiring platform</Row>
        <Row id="mottoCaption">
          We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.
          </Row>
        {/* </Row> */}

        <Row className="appBtn">
        <BlockButton text={text} />
        </Row>
    </Container>
  );
};

