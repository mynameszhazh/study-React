import React, { Component } from "react";
import RouterContext from "./RouterContext";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          // console.log(context, "context");
          const { path, component } = this.props;
          const match = context.location.pathname === path;
          return match ? React.createElement(component, this.props) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
