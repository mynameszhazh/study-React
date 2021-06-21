import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import store from '../store/index'
export default class Login extends Component {
  render() {
    // 如果有路由的操作 这个东西都是会挂载上去的
    // console.log('propsLogin', this.props);
    console.log(store.getState());
    const {isLogin, location} = this.props
    const {redirect = '/'} = location.state || {}
    if(isLogin) {
      return <Redirect to= {redirect}></Redirect>
    } else {
      return (
        <div>
          <h3>Login</h3>
          <button>Click</button>
        </div>
      )
    }
  }
}
