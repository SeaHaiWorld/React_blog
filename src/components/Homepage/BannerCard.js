import React, { Component } from "react";
import "./BannerCard.css";
import { Link } from "react-router-dom";

class BannerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          id: "Blog",
          page: "/blog/Blog"
        },
        {
          id: "Demo",
          page: "/blog/Demo"
        },
        {
          id: "About me",
          page: "/blog/About"
        }
      ]
    };
  }

  render() {
    return (
      <div className="home-card-area">
        {this.state.card.map(item => {
          return (
            <div key={item.id} className="home-card">
              <div className="home-card-name">
                <Link className="link" to={item.page}>
                  {item.id}
                </Link>
              </div>
            </div>
          );
        })}
        <div className="card-list" />
      </div>
    );
  }
}
export default BannerCard;