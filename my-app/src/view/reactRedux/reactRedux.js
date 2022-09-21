import React, { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "../../components/xReactRedux/xreactRedux";

/**
 * 注意这个 connect 中间是有好几个参数的,
 * 官方文档才是一个正确的打开方式
 */
export default connect((state, props) => {
  // console.log(props); // 这个props 是在父组件使用的时候  传入的 参数
  return { count: state };
})(
  class reactRedux extends Component {
    render() {
      const { count, dispatch } = this.props;
      return (
        <div>
          <h2>{count}</h2>
          <button
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            increament
          </button>
        </div>
      );
    }
  }
);
