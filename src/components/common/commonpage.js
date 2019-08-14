import React, { Component } from "react";
import "./CommonPage.css";
import Wall from "./Wall/Wall";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Bottom from "./Bottom/Bottom";

class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "none",
      Width: "100vw",
      listWidth: "75vw",
      Display: "none",
      img: "25vh"
    };
  }

  routejump = e => {
    this.setState({
      Width: "25vw",
      index: "block",
      img: "13.5vw"
    });
    setTimeout(() => {
      this.setState({
        Display: "flex"
      });
    }, 500);
  };

  handleClick = e => {
    const isView = e => e === "/blog";
    if (isView(this.props.location.pathname)) {
      this.setState({
        Width: "25vw",
        index: "block",
        img: "13.5vw"
      });
      setTimeout(() => {
        this.setState({
          Display: "flex"
        });
        this.props.history.push("/blog/Home");
      }, 500);
    } else {
      this.setState({
        Width: "100vw",
        Display: "none",
        index: "none",
        img: "25vh"
      });
      setTimeout(() => {
        this.props.history.push("/blog");
      }, 500);
    }
  };

  render() {
    return (
      <div className="Home">
        <Header routejump={this.routejump} />
        <div className="Lay">
          <Wall
            index={this.state.index}
            handleClick={this.handleClick}
            bannerWidth={this.state.Width}
            imgWidth={this.state.img}
          />
          <Banner
            pathname={this.props.location.pathname}
            listWidth={this.state.listWidth}
            listDisplay={this.state.Display}
          />
        </div>
        <Bottom />
      </div>
    );
  }
}
export default CommonPage;
