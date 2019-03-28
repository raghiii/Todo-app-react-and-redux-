import React, { Component } from "react";
import Header from "./components/header/";
import TaskBar from "./components/taskbar/";
import TaskList from "./components/tasklist/";
import store from "./reducers";
import Filter from "./components/filter/";
import "./style.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div id="one">
        <Header />
        <TaskBar />
        <TaskList />
        <Filter />
      </div>
    );
  }
}

export default App;
