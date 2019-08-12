import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Container from "./Container";
import "./DemoPage.css";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Demo">
        <Container />
      </div>
    );
  }
}
export default Demo;
