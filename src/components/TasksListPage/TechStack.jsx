import React, { useState } from 'react';
import {Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from "reactstrap";


export default () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);


  // const handlePythonButton = () =>{  
  //   tasks.filter( python => python.techStack === "Python")
  // };


    return (
      <Col className="col-4 col-md-3 pl-2 mr-4">
        <ButtonDropdown className="dropdownButton" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        All tech stacks
      </DropdownToggle>
      <DropdownMenu>
      <div className="cardArrow"></div>
      <Card className="techStackCard">
        <CardBody>
          <CardTitle>Choose from the list below</CardTitle>
          <CardSubtitle>
          <Button 
          // onClick={()=>handlePythonButton}
          >Python</Button>
          <Button>MongoDB</Button>
          <Button>ReactJS</Button>
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
