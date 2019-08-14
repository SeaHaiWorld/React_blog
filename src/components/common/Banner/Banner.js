import React, { Component } from "react";
import "./Banner.css";
import AboutList from "../../Aboutpage/AboutList";
import BlogList from "../../Blogpage/BlogList";
import DemoPage from "../../Demopage/DemoPage.js";
import HomeList from "../../Homepage/HomeList";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="banner"
        style={{
          width: this.props.listWidth,
          display: this.props.listDisplay
        }}
      >
        {this.props.pathname === "/blog/Home" && <HomeList />}
        {this.props.pathname === "/blog/About" && <AboutList />}
        {this.props.pathname === "/blog/Demo" && <DemoPage />}
        {this.props.pathname === "/blog/Blog" && <BlogList />}
      </div>
    );
  }
}
export default Banner;
