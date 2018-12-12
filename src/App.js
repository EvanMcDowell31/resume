import React, { Component } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import Styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={Styles.page}>
        <HomePage />
      </div>
    );
  }
}

export default App;
