import React, { Component } from 'react';
import { Button } from "antd";

class BlockButton extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
      return (
          <div className="site-button-ghost-wrapper">
            <Button ghost>
            {this.props.text}
            </Button>
          </div>             
      );
    }
  }
  
  export default BlockButton;
  