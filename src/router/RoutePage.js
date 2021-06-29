import React, { Component } from 'react'
import {BrowserRouter as Route, Router, Switch} from 'react-router-dom'

import CatePage from '../view/CatePage'
import CarPage from '../view/CarPage'
import ProfilePage from '../view/ProfilePage'
import HomePage from '../view/HomePage'

export default class RoutePage extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Switch> */}
            <Route path='/' component={HomePage}></Route>
            <Route path='/car' component={CarPage}></Route>
            <Route path='/profile' component={ProfilePage}></Route>
            <Route path='/cate' component={CatePage}></Route>
          {/* </Switch> */}
        </Router>
      </div>
    )
  }
}
