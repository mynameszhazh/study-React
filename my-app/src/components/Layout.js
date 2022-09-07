import React, { Component } from 'react'

import BottomBar from './common/BottomBar'
import TopNav from './common/TopNav'

export default class Layout extends Component {
  render() {
    let { children, showTopNav, showBottomBar, title } = this.props
    let { txt, content, btnClick } = children
    document.title = title
    return (
      <div className='layout'>
        {showTopNav && <TopNav />}
        {content}
        {txt}
        <div>
          <button onClick={btnClick}>btn</button>
        </div>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}
