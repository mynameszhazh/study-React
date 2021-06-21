import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import About from '../page/About'
import HomePage from '../page/HomePage'
import Login from '../page/Login'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Link to='/login'>登录</Link>

          {/* route一定要包裹在router之内 因为route要适应history */}
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/user' component={About}/>
            <Route exact path='/login' component={Login}/>
            <Route render={() => <h3>404</h3>}></Route>
          </Switch>
          <Route/>
          <Route/>
        </Router>
      </div>
    )
  }
}
