import React, { Component } from "react";
import "./CommonPage.css";
import Wall from "./Wall/Wall";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Bottom from "./Bottom/Bottom";
import Right from "../../assets/right.png";

class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "25vh",
      index: "none",
      Width: "100vw",
      Display: "none",
      listWidth: "75vw"
    };
  }

  routejump = e => {
    this.setState({
      Width: "25vw",
      img: "13.5vw",
      index: "block"
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
        img: "13.5vw",
        index: "block"
      });
      setTimeout(() => {
        this.setState({
          Display: "flex"
        });
        this.props.history.push("/blog/Home");
      }, 500);
    } else {
      this.setState({
        img: "25vh",
        index: "none",
        Width: "100vw",
        Display: "none"
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
          <img
            className="right"
            src={Right}
            alt="right"
            style={{ display: this.state.Display }}
            onClick={this.handleClick}
          />
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
