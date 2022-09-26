import React, { Children, Component } from "react";
import { matchPath } from "react-router-dom";
import RouterContext from "./RouterContext";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          // console.log(context, "context");
          const { path, component, render, children } = this.props;
          const location = this.props.location || context.location;
          // const match = context.location.pathname === path;
          const match = matchPath(this.props, location.pathname);
          console.log(match, "mathch");
          const props = {
            ...context,
            location,
            match,
          };
          return match
            ? children
              ? typeof children === "function"
                ? children(props)
                : children
              : component
              ? React.createElement(component, props)
              : render
              ? render(props)
              : null
            : typeof children === "function"
            ? children(props)
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
