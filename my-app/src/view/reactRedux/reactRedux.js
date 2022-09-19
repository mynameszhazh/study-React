import React, { Component } from "react";
import { connect } from "react-redux";

export default connect((state) => ({ count: state }))(
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
