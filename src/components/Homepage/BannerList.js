import React, { Component } from "react";
import "./BannerList.css";
import axios from "axios";

class BannerList extends Component {
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
      }
    };
  }

  getDate() {
    axios.get("../blogdata.json").then(res => {
      this.setState({ blogdata: res.data });
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
        <div className="banner-container">
          <div className="bannerList">
            <div className="bannerblog-title">BlogList</div>
            <div className="bannerblog">
              {this.state.blogdata.Blog.map((item, key) => {
                return (
                  <div className="bannerblog-list" key={key}>
                    <div className="list-title">
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
        </div>
      </div>
    );
  }
}

export default BannerList;
