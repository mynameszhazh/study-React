import React, { Component } from "react";
import RouterContext from "./RouterContext";

// Redirect 就是使用history 来进行处理这样 
export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const {history} = context
          const {to} = this.props
          // history.push(to)
          return <LifeCycle onMount={() => history.push(to)}></LifeCycle>
        }}
      </RouterContext.Consumer>
    );
  }
}

export class LifeCycle extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentWillMount() {
    if(this.props.onMount) {
      this.props.onMount()
    }
  }
  render() {
    return (
      <div>LifeCycle</div>
    )
  }
}
