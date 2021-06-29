import React, { Component } from 'react'
// import { Route, Redirect} from 'react-router-dom'
import Route from '../kRouterDom/Route'
import Redirect from '../kRouterDom/Redirect'

import {connect} from 'react-redux'

export default connect(
  ({user}) => ({isLogin: user.isLogin}),
) (class PrivateRoute extends Component {
  render() {
    const {isLogin, path, component} = this.props
    // console.log(component);
    if(isLogin) {
      // 登录  动态决定一些东西
      return <Route path={path} component={component} />
    } else {
      // 这个就是只是 渲染一个 login 这样而已
      return <Redirect to={{pathname:'/login' , state:{redirect: path}}}></Redirect>
    }
  }
}
)