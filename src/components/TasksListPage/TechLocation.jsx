import React, { useState } from 'react';
import {Col,ButtonDropdown, DropdownToggle,Input, DropdownMenu, DropdownItem,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";
import SliderBar from "./SliderBar";


export default () => {

  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

    return (
      <Col className="col-4 col-md-3">
     <ButtonDropdown className="dropdownButton" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Location
      </DropdownToggle>
      <DropdownMenu>
      <div className="cardArrow"></div>
      <Card className="techStackCard">
        <CardBody>
          <CardTitle>To be done</CardTitle>
          <CardSubtitle>
          <Button>In person</Button>
          <Button>Remotely</Button>
          <Button>All</Button>
          </CardSubtitle>
          <CardTitle>Where</CardTitle>
          <CardSubtitle>
         <Input/>
          </CardSubtitle>
          <CardTitle>Distance</CardTitle>
          <CardSubtitle>
         <SliderBar/>
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
