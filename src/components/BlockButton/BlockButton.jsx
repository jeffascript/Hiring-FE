import React, { memo } from "react";
import { Button } from "antd";

export default memo(({ text, onClick, style}) => {
  return (
    <div className="site-button-ghost-wrapper">
      <Button ghost style={style} onClick={onClick}>{text}</Button>
    </div>
  );
});

