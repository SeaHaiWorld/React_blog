import React, { Component } from "react";
import "./Container.css";
import Cal from "../../assets/Cal.png";
import Todo from "../../assets/Todo.png";
import menu from "../../assets/menu.png";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Demo: [
        {
          id: "Simple Caculate",
          img: Cal,
          page1: " https://seahaiworld.gitee.io/cal",
          page2: "https://gitee.com/SeaHaiWorld/Cal"
        },
        {
          id: "Todo List by React",
          img: Todo,
          page1: "https://seahaiworld.gitee.io/todo-list/",
          page2: "https://gitee.com/SeaHaiWorld/Todo-List/tree/Todo/"
        },
        {
          id: "右拉菜单",
          img: menu,
          page1: "https://seahaiworld.gitee.io/menu",
          page2: "https://gitee.com/SeaHaiWorld/menu"
        }
      ]
    };
  }

  render() {
    return (
      <div className="Demo-banner">
        <div className="demo-container">
          {this.state.Demo.map((item, key) => {
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
                  <img src={item.img} alt="示例" />
                </div>
                <div className="demo-democard-desc">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.page1}
                  >
                    演示
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.page2}
                  >
                    代码
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
export default Container;

