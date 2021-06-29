import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Bottom extends Component {
  render() {
    return (
      <div className='bottom'>
        <div className='bot-home'>
          <Link to='/'>首页</Link>
        </div>
        <div className='bot-cate'>
         <Link to='/cate'>分类</Link>
        </div>
        <div className='bot-car'>
         <Link to='/car'>车子</Link>
        </div>
        <div className='bot-profile'>
          <Link to='/profile'>我的</Link>
        </div>
      </div>
    )
  }
}
