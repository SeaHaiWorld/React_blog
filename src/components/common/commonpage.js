import React, { Component } from "react";
import "./commonpage.css";
import Wall from "../common/Wall/Wall";
import Header from "../common/Header/Header";
import Banner from "./Banner/Banner";
import Bottom from "../common/Bottom/Bottom";
import BannerCard from "../Homepage/BannerCard";

class Commonpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "none",
      Width: "100%",
      listWidth: "75%",
      Display: "none"
    };
  }

  routejump = e => {
    this.setState({
      Width: "400px",
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
        Width: "400px",
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
        Width: "100%",
        Display: "none",
        index: "none"
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
          />
          <Banner
            pathname={this.props.location.pathname}
            listWidth={this.state.listWidth}
            listDisplay={this.state.Display}
          />
        </div>
        {this.props.location.pathname === "/blog" && <BannerCard />}
        <Bottom />
      </div>
    );
  }
}
export default Commonpage;
