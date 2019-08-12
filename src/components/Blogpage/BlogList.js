import React, { Component } from "react";
import "./BlogList.css";
import Day from "../../assets/Day.png";
import label from "../../assets/label.png";
import axios from "axios";

class Page1 extends Component {
  constructor(props) {
    //构造函数
    super(props);
    this.state = {
      blogdata: {
        Blog: [
          { id: "", title: "", date: "", label: [], intro: [], article: "" }
        ]
      }
    };
  }

  getDate() {
    axios
      .get(
        "../blogdata.json"
      )
      .then(res => {
        this.setState({ blogdata: res.data });
      });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div className="blog">
        <div
          className="blog-container"
          style={{
            display: this.props.listDisplay
          }}
        >
          {this.state.blogdata.Blog.map((item, key) => {
            return (
              <div className=" blogcard" key={key}>
                <div className="blog-desc">
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.article}
                  >
                    <h1>{item.title}</h1>
                  </a>
                  <div className="tip">
                    <img src={Day} alt="day" />
                    <div className="tiplist">{item.date}</div>
                    <img src={label} alt="label" />
                    <div className="tiplist">{item.label}</div>
                  </div>
                  <div className="blogintro">{item.intro}...</div>
                  <div className="blogbottom">
                    <button className="more">
                      <a
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.article}
                      >
                        <span>展开全文</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Page1;
