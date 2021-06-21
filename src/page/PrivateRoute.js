import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'

export default class PrivateRoute extends Component {
  render() {
    const {isLogin, path, component} = this.props
    // console.log(path);
    if(isLogin) {
      // 登录
      return <Route path={path} component={component} />
    } else {
      return <Redirect to={{pathname:'/login' , state:{redirect: path}}}></Redirect>
    }
  }
}
