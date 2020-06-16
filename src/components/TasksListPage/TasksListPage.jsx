import React from "react";
import Banner from "../Banner/Banner";
import TasksFilter from "./TasksFilter";
import { Row } from "reactstrap";

export default () => {
  return (
    <>
      <div className="col-12 p-0 m-0">
        <Banner />
        <TasksFilter/>
      </div>
    </>
  );
};
