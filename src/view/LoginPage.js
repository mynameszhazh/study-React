import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default connect(
  ({user}) => ({isLogin: user.isLogin}),

 {
    loginout: () => ({type: 'Loign'})
  }

)(
  class LoginPage extends Component {
    render() {
      const {loginout, isLogin, location} = this.props 
      const {redirect = '/'} = location || {}
      if(isLogin) {
        return <Redirect to= {{pathname: redirect}}></Redirect>
      } else {
        return (
          <div>
            <h3>LoginPage.... 请登录先</h3>
            <button onClick={loginout}>Login</button>
          </div>
        )
      }
    }
  }
)
