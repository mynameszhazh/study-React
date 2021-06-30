import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import Homepage from '../page/HomePage'
import Homepage from '../page/HomePage/Homepage.js'
import LoginPage from '../page/LoginPage/LoginPage.js'
import UserPage from '../page/UserPage/UserPage.js'
// import _404 from '../page/_404/'

export default class RoutePage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/user' component={UserPage}></Route>
          <Route exact path='/' component={Homepage}></Route>
          {/* <Route exact path='/' component={Homepage}></Route> */}
        </Switch>
      </Router>
    )
  }
}

