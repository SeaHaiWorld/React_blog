import React, { Component } from "react";
import "./Wall.css";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commondata: {
        name: "",
        says: "",
        desc: [
          {
            id: "",
            href: ""
          }
        ]
      }
    };
  }

  getDate() {
    axios
      .get(
        "https://raw.githubusercontent.com/SeaHaiWorld/blog/gh-pages/commondata.json"
      )
      .then(res => {
        this.setState({ commondata: res.data });
      });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div className="wall" style={{ width: this.props.bannerWidth }}>
        <div className="wall-me">
          <div
            className="wall-photo"
            onClick={this.props.handleClick.bind(this)}
          >
            <img
              title="Click me"
              src={Logo}
              alt="头像"
              className="img"
              style={{ width: this.props.imgWidth }}
            />
          </div>
          <div className="wall-desc">
            <h1>{this.state.commondata.name}</h1>
            <div className="wall-says">{this.state.commondata.says}</div>
            <div className="wall-link">
              {this.state.commondata.desc.map((item, key) => {
                return (
                  <div className="link" key={key}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                    >
                      {item.id}
                    </a>
                    {key !== 2 && <span>/</span>}
                  </div>
                );
              })}
            </div>
            <Link
              to="/blog/About"
              className="show"
              style={{ display: this.props.index }}
            >
              <p>关于我</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Wall;
