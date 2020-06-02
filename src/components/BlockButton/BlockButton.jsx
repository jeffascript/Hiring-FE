import React from "react";
import { Button } from "antd";

export default ({ text }) => {
  return (
    <div className="site-button-ghost-wrapper">
      <Button ghost>{text}</Button>
    </div>
  );
};

