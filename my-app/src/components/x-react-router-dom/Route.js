import React, { Component } from "react";
import { matchPath } from "react-router-dom";
import RouterContext from "./RouterContext";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          // console.log(context, "context");
          const { path, component, computedMatch, render, children } =
            this.props;
          const location = this.props.location || context.location;
          /**
           * 首先使用 我计算好的 mathc, 没有就重新计算, 再来就是 我页面初始化的 match 了
           */
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(this.props, location.pathname)
            : context.mathch;
          // console.log(match, "mathch");
          const props = {
            ...context,
            location,
            match,
          };
          return (
            <RouterContext.Provider value={props}>
              {match
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
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
