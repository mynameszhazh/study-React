import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import About from '../page/About'
import HomePage from '../page/HomePage'
import Login from '../page/Login'
import PrivateRoute from '../page/PrivateRoute'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Link to='/login'>登录</Link>
          <Link to='/search/123'>搜索</Link>

          {/* route一定要包裹在router之内 因为route要适应history */}
          <Switch>
            <Route exact path='/' component={HomePage}/>
            {/* <Route path='/user' component={About}/> */}
            <Route path='/user' component={PrivateRoute}/>
            <Route path='/login' component={Login}/>
            <Route path='/search/:id' component={Search}/>
            <Route render={() => <h3>404</h3>}></Route>
          </Switch>
          <Route/>
          <Route/>
        </Router>
      </div>
    )
  }
}

function Detail(props) {
  return <div>123</div>
}

// 函数编程直接使用一个return 就可以了 路由只要的得到了 component是一个html一样的玩意就可以了
// 这样的传参数的方法 和vue的只能说太像了 果然是vue的鼻祖
function Search(props) {
  console.log(props);
  const {id} = props.match.params
  return <div>
    <h3>我的id是 {id}</h3>
    <Link to={'/search/' + id +'/detail' }>详情</Link>
    {/* <Link to={'/search/detail/'+ id }>详情</Link> */}
    {/* <Route path={'/search/detail/:'+ id} component={Detail}/> */}
    <Route path='/search/:id/detail' component={Detail}/>
  </div>
}
