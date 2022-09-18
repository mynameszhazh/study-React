import React, { Component } from "react";
import "./index.css";
import store from "../../store/index";

export default class TestRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: store.getState(),
    };
  }
  add = () => {
    // console.log("add");
    store.dispatch({ type: "INCREMENT" });
  };
  increment = () => {
    // console.log("increment");
    store.dispatch({ type: "DECREMENT" });
  };

  asyncAdd = () => {
    store.dispatch((dispatch) => {
      // setTimeout(() => {
      //   dispatch("INCREMENT");
      // }, 2000);
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      // console.log("forceUpdate");
      this.setState({
        state: store.getState(),
      });
      // this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="TestRedux">
        <h2>{this.state.state}</h2>
        {/* <h2>{store.getState()}</h2> */}
        <button onClick={this.add}>add</button>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    );
  }
}
