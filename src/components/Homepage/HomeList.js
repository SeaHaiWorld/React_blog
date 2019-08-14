import React, { Component } from "react";
import "./HomeList.css";
import axios from "axios";
import Cal from "../../assets/Cal.png";
import Cal2 from "../../assets/Cal2.png";
import Todo from "../../assets/Todo.png";
import Todo2 from "../../assets/Todo2.png";
import menu from "../../assets/menu.png";
import menu2 from "../../assets/menu2.png";

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
      img: [
        {
          id: "Calculator",
          img: Cal,
          img2: Cal2,
          page: " https://seahaiworld.gitee.io/cal"
        },
        {
          id: "Todo List",
          img: Todo,
          img2: Todo2,
          page: "https://seahaiworld.gitee.io/todo-list/"
        },
        {
          id: "Menu",
          img: menu,
          img2: menu2,
          page: "https://seahaiworld.gitee.io/menu"
        }
      ]
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
              {this.state.img.map((item, key) => {
                return (
                  <div className="demolist" key={key}>
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.page}
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
