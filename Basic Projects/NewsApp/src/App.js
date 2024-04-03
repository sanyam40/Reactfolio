// shortcut : rcc
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Navbar />
        <News setProgress={this.setProgress} />
      </div>
    );
  }
}
