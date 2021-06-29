import React, { Component } from 'react'
import {connect} from 'react-redux'
export default connect(
  ({user}) => ({isLogin: user.isLogin}),
  {
    loginout: () => ({type: 'LOGIN_FAIL'})
  }
)( class About extends Component {
  render() {
    const {loginout} = this.props
    return (
      <div>
        <h3>About</h3>
        <button onClick={loginout}>quite login</button>
      </div>
    )
  }
}
)