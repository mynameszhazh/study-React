import React, { Component } from 'react'
import {RouteRcontext} from './RouterContext'

export default class Redirect extends Component {
  render() {
    // return null
    return <RouteRcontext.Consumer>
      {
        context => {
          const {history} = context
          const {to} = this.props
          // 这个玩意就是一个处理 不在登录页这样的一个操作
          return <LifeCycle onMount={()=> history.push(to)}></LifeCycle>
        }
      }
    </RouteRcontext.Consumer>
  }
}

class LifeCycle extends Component {
  componentDidMount() {
    if(this.props.onMount) {
      this.props.onMount()
    }
  }
  render() {
    return null
  }
}
