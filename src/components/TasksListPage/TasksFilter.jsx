import React from "react";
import {Row} from "reactstrap";
import TechStack from "./TechStack";
import TechLocation from "./TechLocation";
import TechTask from "./TechTask";


export default () => {

    return (
      <Row className="col-12 tasksfilter">
      <TechStack/>
      <TechLocation/>
      <TechTask/>
      </Row>
    );
}
