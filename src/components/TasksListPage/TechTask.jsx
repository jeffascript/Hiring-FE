import React, { useState } from 'react';
import {Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";


export default () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);


    return (
      <Col className="col-4 col-md-3">
        <ButtonDropdown className="dropdownButton" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
       Task type
      </DropdownToggle>
      <DropdownMenu>
      <div className="cardArrow"></div>
      <Card className="techStackCard">
        <CardBody>
          <CardTitle>Types:</CardTitle>
          <CardSubtitle>
          <Button>E-commerce</Button>
          <Button>Data table</Button>
          <Button>RWD</Button>
          <Button>SQL</Button>
          <Button>JS</Button>
          </CardSubtitle>
          <footer>
          <Button>Cancel</Button>
          <Button>Apply</Button>
          </footer>
        </CardBody>
      </Card>
      </DropdownMenu>
    </ButtonDropdown>
      </Col>
    );
}
