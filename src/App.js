import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/common/CommonPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="/blog" component={Index} />
      </Router>
    );
  }
}
export default App;

