import React, { Component } from "react";
import "./DemoPage.css";
import axios from "axios";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demodata: {
        Demo: [
          {
            id: "",
            img: "",
            img2: "",
            page1: "",
            page2: ""
          }
        ]
      }
    };
  }

  getDate() {
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
      <div className="Demo-banner">
        <div className="demo-container">
          {this.state.demodata.Demo.map((item, key) => {
            return (
              <div key={key} className="demo-democard">
                <div className="demo-democard-title">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.page1}
                  >
                    {item.id}
                  </a>
                </div>
                <div className="demo-democard-img">
                  <div className="img-eg">
                    <img src={item.img} alt="示例" />
                  </div>
                  <div className="img-eg">
                    <img src={item.img2} alt="示例" />
                  </div>
                </div>
                <div className="demo-democard-desc">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.page1}
                  >
                    <div>演示</div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.page2}
                  >
                    <div> 代码</div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default DemoPage;
