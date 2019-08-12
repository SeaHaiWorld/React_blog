import React, { Component } from "react";
import "./Bottom.css";

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
       link:"https://gitee.com/SeaHaiWorld/projects" 
    };
  }

  render() {
    return (
      <div className="bottom">
        <a target="_blank" rel="noopener noreferrer" href={this.state.link}>
          <span>@SeaHaiWorld</span>
        </a>
      </div>
    );
  }
}
export default Bottom;
