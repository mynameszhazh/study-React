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
          // 这里几乎遍历的就是 我的 Route 组件, 让他们里面会有更多额参数这样
          React.Children.forEach(children, (child) => {
            if (match == null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              // matchPath 一直匹配我写好的路径, context.match 是一个全局定义的 东西
              match = path
                ? matchPath({ ...child.props, path }, location.pathname)
                : context.match;
            }
          });

          return match
            ? React.cloneElement(element, { location, computedMatch: match })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
