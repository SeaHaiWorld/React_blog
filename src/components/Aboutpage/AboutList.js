import React, { Component } from "react";
import "./AboutList.css";
import axios from "axios";

class AboutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutdata: {
        title: "",
        callme: "",
        desc: [],
        like: [],
        call: [{ name: "", herf: "" }]
      }
    };
  }

  getDate() {
    axios
      .get(
        "../aboutdata.json"
      )
      .then(res => {
        this.setState({ aboutdata: res.data });
      });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div className="about-container">
        <div className=" aboutcard">
          <div className="about-desc">
            <h1>{this.state.aboutdata.title}</h1>
            {this.state.aboutdata.desc.map((item, key) => {
              return (
                <div className="li" key={key}>
                  {item}
                </div>
              );
            })}
          </div>
          <div className="about-callme">
            <h1>{this.state.aboutdata.callme}</h1>
            {this.state.aboutdata.call.map((item, key) => {
              return (
                <div className="li" key={key}>
                  {item.name}
                  <a target="_blank" rel="noopener noreferrer" href={item.herf}>
                    :{item.herf}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="about-like">
            {this.state.aboutdata.like.map((item, key) => {
              return (
                <div className="li" key={key}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default AboutList;
