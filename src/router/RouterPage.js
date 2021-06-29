import React, { Component } from 'react'
// 这个browserRouter webpack已经给你配置好了 
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import BrowserRouter from '../kRouterDom/BrowserRouter'
import Route from '../kRouterDom/Route'
import Router from '../kRouterDom/Router'
import Link from '../kRouterDom/Link'
import Switch from '../kRouterDom/Switch'

import About from '../page/About'
import HomePage from '../page/HomePage'
import Login from '../page/Login'
import PrivateRoute from '../page/PrivateRoute'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <BrowserRouter>
        {/* <Router basename='xjh'> */}
          <Link to='/'>首页</Link>
          <Link to='/login'>登录</Link>
          <Link to='/user'>用户中心</Link>
          {/* <Link to='/children'>children</Link> */}
          {/* <Link to='/render'>render</Link> */}
          {/* <Link to='/search/123'>搜索</Link> */}

          {/* route一定要包裹在router之内 因为route要适应history */}
          {/* <Switch> */}
            <Route  path='/' component={HomePage}/>
            <PrivateRoute path='/user' component={About}/>
            <Route path='/login' component={Login}/>
            {/* <Route path='/user' component={About}/> */}
            {/* 这个地方肯定是有其他的效果需要出现 */}
            {/* <Route path='/children' children={() => <div>children</div>}/> */}
            {/* <Route path='/render' render={() => <div>render</div>}/> */}
            {/* <PrivateRoute path='/search/:id' component={Search}/> */}
            {/* <Route path='/search/:id' component={Search}/> */}
            {/* <Route render={() => <h3>404</h3>}></Route> */}
          {/* </Switch> */}
        </BrowserRouter>
        {/* </Router> */}
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
  // 我这个地方是没有处理的一个操作 所有搞不定 嵌套 那个match会给到一个很好的 法子
  const {id} = props.match.params
  return <div>
    <h3>我的id是 {id}</h3>
    <Link to={'/search/' + id +'/detail' }>详情</Link>
    {/* <Link to={'/search/detail/'+ id }>详情</Link> */}
    {/* <Route path={'/search/detail/:'+ id} component={Detail}/> */}
    <Route path='/search/:id/detail' component={Detail}/>
  </div>
}
