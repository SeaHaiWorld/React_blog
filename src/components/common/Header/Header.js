import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commondata: {
        title: "",
        intro: "",
        page: "",
        menu: [
          {
            id: "",
            page: ""
          }
        ]
      }
    };
  }

  getDate() {
    axios.get("https://raw.githubusercontent.com/SeaHaiWorld/blog/gh-pages/commondata.json").then(res => {
      this.setState({ commondata: res.data });
    });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div className="header">
        <div className="title">
          <Link to={this.state.commondata.page} className="Link">
            <p>{this.state.commondata.title}</p>
          </Link>
        </div>
        <div className="intro">
          <p>{this.state.commondata.intro}</p>
        </div>
        <div className="menu">
          {this.state.commondata.menu.map((item, key) => {
            return (
              <div key={key}>
                <Link to={item.page} className="Link">
                  <div className="menu-item" onClick={this.props.routejump}>
                    {item.id}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
