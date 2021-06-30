import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginPage from '../../view/LoginPage'

export default connect(
  ({user}) => ({isLogin: user.isLogin})
)(class PrivateRoute extends Component {
  render() {
    const {isLogin, component, path} = this.props
    if(isLogin) {
      return <Route path={path} component={component}></Route>
    } else {
      // path = '/login'
      return <Redirect to={{pathname: '/login', state: {redirect: path}}}></Redirect>
    }
  }
})
