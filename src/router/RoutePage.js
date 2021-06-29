import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import CatePage from '../view/CatePage'
import CarPage from '../view/CarPage'
import ProfilePage from '../view/ProfilePage'
import HomePage from '../view/HomePage'

export default class RoutePage extends Component {
  render() {
    return (
      // <div className='RoutePage'>
        <Router>
          <Switch>
            {/* 这个router不知道为什么会有一个顺序来搞这些玩意 我是真的有点服气的一个操作 */}
            <Route path='/profile' component={ProfilePage}></Route>
            <Route path='/car' component={CarPage}></Route>
            <Route path='/cate' component={CatePage}></Route>
            <Route path='/' component={HomePage}></Route>
          </Switch>
        </Router>
      // </div>
    )
  }
}
