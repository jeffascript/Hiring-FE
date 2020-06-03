import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col,CardSubTitle} from "reactstrap";

const LatestTask = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
        <CardTitle>
            With supporting text below as a natural lead-in to additional
            content.
          </CardTitle>
          <CardSubTitle>React</CardSubTitle>
          
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default LatestTask;
