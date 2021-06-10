import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <p>RouterPage</p>
        <Router>
          <Link to='/' >首页</Link>
          <span>       |        </span>
          <Link to='/user'>用户中心</Link>
          <Switch>
            <Route path='/user' component={ UserPage }></Route>
            <Route 
            exact 
            path='/'
            component={ HomePage }
            // children={() => <div>children</div>}
            // render = {() => <div>render</div>}
            ></Route>
            <Route component={ FourPage }></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>HomePage</p>
      </div>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <p>UserPage</p>
      </div>
    )
  }
}
class FourPage extends Component {
  render() {
    return (
      <div>
        <p>FourPage</p>
      </div>
    )
  }
}

