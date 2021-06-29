import React, { Component } from 'react'
import {RouteRcontext} from './RouterContext'

export default class Route extends Component {
  render() {

    return (
      // 多个自己或通信的感觉  就是我的link改变这边也是能通知一下的
      <RouteRcontext.Consumer>
      {
        context => {
          // console.log('123');
          const {path, children, component, render} = this.props

          // 这个玩意还是会进来很多次的 一个matchPath 应该可以解决这个问题
          const match = context.history.location.pathname === path
          // 这个地方必须返回一个东西 createElement 处理之后是一个函数一样的东西 我得到的是它的返回值 这个样子
          // return match? React.createElement(component, this.props) : null
          const location =  this.props.location || context.history.location

          // 这个玩意经过一系列的判断就可以做到一个 看出里面是不是children render 这个样子 有没有 之类的
          // const match = matchPath(location.history.location, this.props)
          const props = {
            ...context,
            location,
            match
          }

          // 这个地方就是完完全全的全部逻辑了 可以说 那个先执行 （） 就是正则里面的一样一个整体
          return match ? 
          (children ? (typeof children ==='function'? children(props): children) 
          : (component? (React.createElement(component, props)):(render? render(props): null)) )
           : (typeof children === 'funciton' ? children(props): null)
        }
      }
      </RouteRcontext.Consumer> 
    )
  }
}


// 这样的写法就不会通信了的感觉
// export default class Route extends Component {
//   render() {
//     console.log(123);
//     const {path, component} = this.props
//     const match = window.location.pathname === path
//     return match? React.createElement(component, this.props) : null
//     }
// }