import React, { Component } from 'react'

import BottomBar from './common/BottomBar'
import store from '../store/index'
import TopNav from './common/TopNav'
import { connect } from 'react-redux'

export default connect(
  state => ({num: state}),
  {
    decrement: () => ({type: 'DECREMENT'})
  }
)(
  class Layout extends Component {
    componentDidMount() {
      store.subscribe(() => {
        console.log('store change')
        // 这个是当前实例更新, 和外面的是没有关系的
        this.forceUpdate()
      })
    }
    render() {
      let { children, showTopNav, showBottomBar, title, num, decrement } = this.props
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
          <div>
            {/* <button onClick={this.decrement}>btn{store.getState()}</button> */}
            <button onClick={decrement}>btn{num}</button>
          </div>
          {showBottomBar && <BottomBar />}
        </div>
      )
    }
    // decrement() {
    //   store.dispatch({ type: 'DECREMENT' })
    // }
  }
)