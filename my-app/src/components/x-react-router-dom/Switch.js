import React, { Component } from "react";
import { matchPath } from "react-router-dom";
import RouterContext from "./RouterContext";

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          // 找出渲染的, 第一个符合匹配的元素, 存在element
          let element,
            match = null;
          const { children } = this.props;
          const { location } = context;
          React.Children.forEach(children, (child) => {
            if (match == null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath({ ...child.props, path }, location.pathname)
                : context.match;
            }
          });
          return match ? React.cloneElement(element, {}) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
