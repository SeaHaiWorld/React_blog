import React, { Component } from "react";
import "./backtop.css";
import sss from "../../../assets/topback.png";

class backtop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="backtop">
        <img
          className="backtop"
          onClick={this.props.onClick.bind(this)}
          src={sss}
          alt="top"
        />
      </div>
    );
  }
}
export default backtop;
