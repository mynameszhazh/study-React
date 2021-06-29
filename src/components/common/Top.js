import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Top extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className='top'>
        <div className='top-left'>
          <Link to='/'>返回</Link>
        </div>
        <h3>
          {this.props.children}
        </h3>
        <div className='top-right'>
          {/* <Link to='/'>设置</Link> */}
          设置
        </div>
      </div>
    )
  }
}
