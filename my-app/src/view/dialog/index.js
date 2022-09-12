import React, { Component } from "react";
import Dialog from "./components/Dialog";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  handleChangeDialog = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render = () => {
    return (
      <div className="test_dialog">
        <h3>test dialog</h3>
        <button onClick={this.handleChangeDialog}>toggle</button>
        {this.state.isShow && <Dialog></Dialog>}
      </div>
    );
  };
}
