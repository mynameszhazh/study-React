import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'
import Redirect from '../kRouterDom/Redirect'

// import store from '../store/index'
import {connect} from 'react-redux'
export default connect(
  ({user}) => ({isLogin: user.isLogin}),
  {
    login: () => ({type: 'LOGIN_SUC'})
  }
)(
  class Login extends Component {
    componentDidMount() {
      // store.subscribe(() => {
      //   this.forceUpdate()
      // })
    }
    // Login = () => {
    //   store.dispatch({type: 'login'})
    // }
    render() {
      // console.log(store.getState());
      // 如果有路由的操作 这个东西都是会挂载上去的
      // console.log('propsLogin', this.props);
      const {isLogin, login, location} = this.props
      // console.log(this.props);
      //  {pathname: "/login", search: "", hash: "", state: undefined, key: "ixjhsi"}
      // const {redirect = '/'} = {pathname: "/login", search: "", hash: "", state: undefined, key: "ixjhsi"} || {}
      const {redirect = '/'} = location || {}
      if(isLogin) {
        // return <Redirect to= {redirect}></Redirect>
        return <Redirect to= {{pathname: redirect}}></Redirect>
      } else {
        return (
          <div>
            <h3>Login</h3>
            <button onClick={login}>Click</button>
          </div>
        )
      }
    }
  }
)