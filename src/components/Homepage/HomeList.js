import React, { Component } from "react";
import "./HomeList.css";
import axios from "axios";

class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogdata: {
        Blog: [
          {
            title: "",
            date: "",
            intro: []
          }
        ]
      },
      demodata: {
        Demo: [
          {
            id: "",
            img: "",
            img2: "",
            page1: ""
          }
        ]
      }
    };
  }

  getDate() {
    axios
      .get(
        "https://raw.githubusercontent.com/SeaHaiWorld/blog/gh-pages/blogdata.json"
      )
      .then(res => {
        this.setState({ blogdata: res.data });
      });
    axios
      .get(
        "https://raw.githubusercontent.com/SeaHaiWorld/blog/gh-pages/demodata.json"
      )
      .then(res => {
        this.setState({ demodata: res.data });
      });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div
        style={{
          display: this.props.listDisplay
        }}
      >
        <div className="home-container">
          <div className="blogbanner">
            <div className="blogbanner-title">BlogList</div>
            <div className="blogbannerlist">
              {this.state.blogdata.Blog.map((item, key) => {
                return (
                  <div className="bloglist" key={key}>
                    <div className="bloglist-title">
                      <a
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.article}
                      >
                        {item.title}
                      </a>
                    </div>
                    <div className="list-date">{item.date}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="demobanner">
            <div className="demobanner-title">DemoList</div>
            <div className="demobannerlist">
              {this.state.demodata.Demo.map((item, key) => {
                return (
                  <div className="demolist" key={key}>
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.page1}
                    >
                      <div className="demolist-title">{item.id}</div>
                      <img src={item.img} alt="eg" />
                      &nbsp;
                      <img src={item.img2} alt="eg" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeList;
