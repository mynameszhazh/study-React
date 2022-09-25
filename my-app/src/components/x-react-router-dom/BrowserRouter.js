import { createBrowserHistory } from "@remix-run/router";
import React, { Component } from "react";
import RouterContext from "./RouterContext";
export default class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location,
    };
    // 这个傻逼东西 为什么监听不到呢 我真是有点服气了 我草了
    this.unListen = this.history.listen((location) => {
      // console.log(location, "location");
      this.setState({
        location,
      });
    });
  }
  componentWillUnmount() {
    if (this.unListen) {
      this.unListen();
    }
  }
  render() {
    const { children } = this.props;
    return (
      <RouterContext.Provider
        value={{ history: this.history, location: this.state.location }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}
