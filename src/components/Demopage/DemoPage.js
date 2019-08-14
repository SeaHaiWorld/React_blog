import React, { Component } from "react";
import "./DemoPage.css";
import Cal from "../../assets/Cal.png";
import Cal2 from "../../assets/Cal2.png";
import Todo from "../../assets/Todo.png";
import Todo2 from "../../assets/Todo2.png";
import menu from "../../assets/menu.png";
import menu2 from "../../assets/menu2.png";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Demo: [
        {
          id: "Todo List by React",
          img1: Todo,
          img2: Todo2,
          page1: "https://seahaiworld.gitee.io/todo-list/",
          page2: "https://gitee.com/SeaHaiWorld/Todo-List/tree/Todo/"
        },
        {
          id: "右拉菜单",
          img1: menu,
          img2: menu2,
          page1: "https://seahaiworld.gitee.io/menu",
          page2: "https://gitee.com/SeaHaiWorld/menu"
        },
        {
          id: "Simple Caculate",
          img1: Cal,
          img2: Cal2,
          page1: " https://seahaiworld.gitee.io/cal",
          page2: "https://gitee.com/SeaHaiWorld/Cal"
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
                  <div className="img-eg">
                    <img src={item.img1} alt="示例" />
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
