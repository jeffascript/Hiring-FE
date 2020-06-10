import React from "react";
import BlockButton from "../BlockButton/BlockButton";
import { Row, Col, Image, Container } from "react-bootstrap";
import handshake from "../../assets/pics/handshake.png";
import filter from "../../assets/pics/filter.png";
import network from "../../assets/pics/network.png";

export default () => {
  let text = "Start  >";

  return (
    <>
      <Row className="justify-content-center">
        <GoalTitle></GoalTitle>
        <GoalCaption></GoalCaption>
      </Row>
      <Container>
        <Row >
          <Feature
            icon={filter}
            description="Lorem ipsum dolor sit amet"
          ></Feature>
          <Feature
            icon={network}
            description="Sed do aiusmod tempor incidunt"
          ></Feature>
          <Feature
            icon={handshake}
            description="Ut labore et dolore magna aliqua"
          ></Feature>
        </Row>
      </Container>

      <Row className="appBtn" id="startBtn">
        <BlockButton text={text} style={{ margin: "auto" }} />
      </Row>
    </>
  );
};

const GoalTitle = (props) => {
  return (
    <Col md={12} className="headerTitle">
      Lorem ipsum dolor sit amet
    </Col>
  );
};

const GoalCaption = (props) => {
  return (
    <Col md={12} className="captionTitle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, aspernatur quod
      ab sunt iusto nihil incidunt
    </Col>
  );
};

const Feature = (props) => {
  return (
    <Col className="feature" sm={12} md={3} lg={3}>
      <Image src={props.icon} rounded fluid className="mb-5" />
      <p>{props.description}</p>
    </Col>
  );
};
